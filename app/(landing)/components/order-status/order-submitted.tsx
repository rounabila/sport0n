"use client";

import Image from "next/image";
import Button from "../ui/button";
import { FiRefreshCw } from "react-icons/fi";

const OrderSubmitted = () => {
const reloadOrderStatus = () => {window.location.reload()};

    return (
        <div className="bg-white max-w-md p-6 flex flex-col items-center justify-center mx-auto">
            <Image 
            src="/images/icon-order-submitted.svg" alt="order submitted" width={117} height={117} className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Order Submitted!!</h2>
            <p className="text-center mb-8">Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
            <Button variant="dark" size="normal" className="w-full" onClick={reloadOrderStatus}>
                <FiRefreshCw/> Refresh Order Status
            </Button>
        </div>
    );
};

export default OrderSubmitted;