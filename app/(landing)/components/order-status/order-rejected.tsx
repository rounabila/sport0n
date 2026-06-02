import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
    return (
        <div className="bg-white max-w-md p-6 flex flex-col justify-center items-center mx-auto">
        <div className="w-18 h-18 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary">
            <FiAlertCircle size={60} />
        </div>
            <h2 className="text-2xl font-semibold mb-2">Order Rejected!!</h2>
            <p className="text-center mb-8">I'm sorry your order is rejected because the payment is not valid.</p>
        </div>
    );
};

export default OrderRejected;