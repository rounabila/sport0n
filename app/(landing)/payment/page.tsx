import PaymentOptions from "../components/payment/payment-options";
import PaymentStep from "../components/payment/payment-step";

const Payment = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-4xl font-bold text-center mb-11">Checkout Now</h1>
             <div className="grid grid-cols-2 gap-14">
                <PaymentOptions/>
                <PaymentStep/>
             </div>
            </div>
        </main>
    );
};

export default Payment;