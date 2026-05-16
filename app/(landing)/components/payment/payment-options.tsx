import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../UI/card-with-header";

const paymentList = [{
    bank_name: "BCA",
    account_number: "1234567890",
    account_holder: "PT Sport0n Indonesia"
}, {
    bank_name: "BNI",
    account_number: "0987654321",
    account_holder: "PT Sport0n Indonesia"
}, {
    bank_name: "BRI",
    account_number: "1122334455",
    account_holder: "PT Sport0n Indonesia"
}];

const PaymentOptions = () => {
    return (
        <CardWithHeader title="Payment Options">
                {paymentList.map((payment, index) => (
                 <div key={index} className="flex gap-5 p-4 border-b border-gray-100">
                    <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                        <FiCreditCard size={24}/>
                    </div>
                     <div className="self center">
                        <div className="font-bold">{payment.bank_name}</div>
                        <div className="text-sm">{payment.account_number}</div>
                        <div className="text-xs opacity-75">{payment.account_holder}</div>
                     </div>
                     <div className="ml-auto bg-blue-50 h-fit px-2 py-1 self-center text-gray-800 text-xs"> 
                        Bank Transfer
                     </div>
                 </div>
                ))}
        </CardWithHeader>
    );
};

export default PaymentOptions;