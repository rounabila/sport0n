"use client";

import Image from "next/image";
import Button from "../UI/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../UI/card-with-header";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
   handlePayment: () => void;
}

const CartItems = ({handlePayment}: TCartItems) => {
  const {items, removeItem} = useCartStore();
  const { push } = useRouter();

  const totalPrice = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-[300px] flex flex-col h-full">
            {items.map((item) => (
                        <div key={item._id} className="border-bborder-gray-200 p-4 gap-3 flex">
                            <div className="bg-primary-light aspect-square flex justify-center items-center w-16">
                                <Image src={getImageUrl(item.imageUrl)} 
                                alt={item.name} 
                                width={60} height={60} 
                                className="aspect-square object-contain" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex gap-3 font-medium text-xs mt-1">
                                <div>{item.qty} x Rp {item.price.toLocaleString("id-ID")}</div>
                                <div className="text-primary">Rp {(item.qty * item.price).toLocaleString("id-ID")}</div>
                            </div>
                        </div> 
                            <Button size="small" variant="ghost" onClick={() => removeItem(item._id)} > 
                                <FiTrash2 className="w-4 h-4 m-1/2 text-black"/>
                            </Button>
                    </div>
                ))}
                </div>
                <><div className="border-tborder-gray-200 p-3 flex justify-between">
        <span className="font-semibold text-sm"> Total </span>
        <span className="text-primary text-sm font-medium">
            Rp {totalPrice.toLocaleString("id-ID")}
        </span>
    </div><Button variant="dark" size="normal" className="m-2 w-[calc(100%-1rem)] flex items-center justify-center gap-5 rounded-md " onClick={handlePayment}>
             <FiCreditCard />Proceed to Payment
        </Button></>
    </CardWithHeader>
    );
};

export default CartItems;