"use client";

import Image from "next/image";
import { cartList } from "../UI/cart-popup";
import Button from "../UI/button";
import { FiArrowRight, FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../UI/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {

const {push} = useRouter();

const totalPrice = cartList.reduce((sum, item) => sum + (item.qty * item.price), 0);

const payment =() => {
}

    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-[300px]">
            {cartList.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
                            <div className="bg-primary-light aspect-square flex justify-center items-center w-16">
                                <Image src={`/images/products/${item.imgUrl}`} alt={item.name} width={60} height={60} className="aspect-square object-contain" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex gap-3 font-medium text-xs mt-1">
                                <div>{item.qty} x Rp {item.price.toLocaleString("id-ID")}</div>
                                <div className="text-primary">Rp {(item.qty * item.price).toLocaleString("id-ID")}</div>
                            </div>
                        </div> 
                            <Button size="small" variant="ghost"> 
                                <FiTrash2 className="w-4 h-4 m-1/2 text-black"/>
                            </Button>
                    </div>
                ))}
                </div>
                <><div className="border-t border-gray-200 p-3 flex justify-between">
        <span className="font-semibold text-sm"> Total </span>
        <span className="text-primary text-sm font-medium">
            Rp {totalPrice.toLocaleString("id-ID")}
        </span>
    </div><Button variant="dark" size="normal" className="m-2 w-[calc(100%-1rem)] flex items-center justify-center gap-5 rounded-md " onClick={() => push('/payment')}>
             <FiCreditCard />Proceed to Payment
        </Button></>
    </CardWithHeader>
    );
};

export default CartItems;