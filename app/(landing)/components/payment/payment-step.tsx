"use client";

import { FiCheckCircle, FiCreditCard } from "react-icons/fi";
import Button from "../UI/button";
import CardWithHeader from "../UI/card-with-header";
import FileUpload from "../UI/file-upload";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";
import priceFormatter from "@/app/utils/price-formatter";

const PaymentStep = () => {
    const {push} = useRouter();
    const {items, customerInfo, reset} = useCartStore();
    const [file, setFile] = useState<File | null>(null);
    const total = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

    const UploadAndConfirmPayment =() => {
        push("/order-status/12345");
    }

    const handleConfirmPayment = async() => {
        if (!file) {
            alert("Please upload the payment receipt before confirming.");
            return;
        }
        if (!customerInfo) {
            alert("Customer information is incomplete. Please go back to the checkout page and fill in all the required fields.");
            push("/checkout");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("customerName", customerInfo.customerName);
            formData.append("customerContact", customerInfo.customerContact!.toString());
            formData.append("customerAddress", customerInfo.customerAddress);
            formData.append("image", file);
            formData.append("purchasedItems", JSON.stringify(items.map(item => ({
                productId: item._id,
                qty: item.qty,
            }))));
            formData.append("totalPayment", items.reduce((sum, item) => sum + (item.qty * item.price), 0).toString());
        
        const res = await transactionCheckout(formData);
        alert('Transaction created successfully.')
        reset();
        push(`/order-status/${res._id}`);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CardWithHeader title="Payment Steps">
         <div> <ol className="px-8 text-justify list-decimal text-xs pt-2 flex flex-col gap-1.5">
                <li> Transfer the total amount of <b>Rp {priceFormatter(total)}</b> to your preferred bank account listed under Payment Options. </li>
                <li> After completing the transfer, <b>keep the payment receipt </b> or a screenshot of the transfer confirmation. This will be needed for the next step </li>
                <li> Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.
                </li>
               </ol>
            <FileUpload onFileSelect={setFile} />
         </div>
<><div className="border-t border-gray-200 p-3 flex justify-between">
        <span className="font-semibold text-sm"> Total </span>
        <span className="text-primary text-sm font-medium">
            {priceFormatter(total)}
        </span>
    </div><Button variant="dark" size="normal" className="m-2 w-[calc(100%-1rem)] flex items-center justify-center gap-5 rounded-md" onClick={handleConfirmPayment}>
            <FiCheckCircle /> Upload Receipt & Confirm
        </Button></>

        </CardWithHeader>
    );
};

export default PaymentStep;