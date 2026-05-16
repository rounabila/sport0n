"use client";

import { FiCheckCircle, FiCreditCard } from "react-icons/fi";
import Button from "../UI/button";
import CardWithHeader from "../UI/card-with-header";
import { cartList } from "../UI/cart-popup";
import FileUpload from "../UI/file-upload";
import { useRouter } from "next/navigation";

const PaymentStep = () => {
    const {push} = useRouter();

    const UploadAndConfirmPayment = () => {
        push("/order-status/12345");
    }

    const totalPrice = (Array.isArray(cartList) ? cartList : []).reduce((sum, item) => sum + (item.qty * item.price), 0);

    return (
        <CardWithHeader title="Payment Steps">
         <div> <ol className="px-8 text-justify list-decimal text-xs pt-2 flex flex-col gap-1.5">
                <li> Transfer the total amount of <b>Rp { totalPrice.toLocaleString("id-ID") }</b> to your preferred bank account listed under 'Payment Options' (BCA, BNI, or BRI). </li>
                <li> After completing the transfer, <b>keep the payment receipt </b> or a screenshot of the transfer confirmation. This will be needed for the next step </li>
                <li> Upload the payment receipt/screenshot using the <b>'Upload Receipt & Confirm'</b> button below to validate your transaction.</li>
               </ol>
            <FileUpload />
         </div>
<><div className="border-t border-gray-200 p-3 flex justify-between">
        <span className="font-semibold text-sm"> Total </span>
        <span className="text-primary text-sm font-medium">
            Rp { totalPrice.toLocaleString("id-ID") }
        </span>
    </div><Button variant="dark" size="normal" className="m-2 w-[calc(100%-1rem)] flex items-center justify-center gap-5 rounded-md" onClick={UploadAndConfirmPayment}>
            <FiCheckCircle /> Upload Receipt & Confirm
        </Button></>

        </CardWithHeader>
    );
};

export default PaymentStep;