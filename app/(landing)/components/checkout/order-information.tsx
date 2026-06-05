"use client";

import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}
const OrderInformation = ({formData, setFormData}: TOrderInformation) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="customerName">Full Name</label>
                    <input type="text" placeholder="Type your full name" 
                    id="customerName" 
                    name="customerName" 
                    required
                    value={formData.customerName} onChange={handleInputChange} />
                </div>
                    <div className="input-group">
                        <label htmlFor="customerContact">Whatsapp Number</label>
                        <input type="text" placeholder="+62xxxxxx" 
                        id="customerContact" 
                        name="customerContact"
                        required
                        value={formData.customerContact as number} onChange={handleInputChange}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="customerAddress">Shipping Address</label>
                        <textarea placeholder="Type your address" 
                        id="customerAddress" rows={5} 
                        name="customerAddress" 
                        required
                        value={formData.customerAddress} onChange={handleInputChange}/>
                    </div>
            </div>
        </CardWithHeader>
    );
};

export default OrderInformation;