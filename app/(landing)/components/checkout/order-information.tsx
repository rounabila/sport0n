import CardWithHeader from "../UI/card-with-header";

const OrderInformation = () => {
    return (
        <CardWithHeader title="Order Information">
            <div className="p-5">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="Type your full name" id="full_name" />
                </div>
                    <div className="input-group">
                        <label htmlFor="wa_number">Whatsapp Number</label>
                        <input type="text" placeholder="+62xxxxxx" id="wa_number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="shipping_address">Shipping Address</label>
                        <textarea placeholder="Type your address" id="shipping_address" rows={5} />
                    </div>
                </div>
        </CardWithHeader>
    );
};

export default OrderInformation;