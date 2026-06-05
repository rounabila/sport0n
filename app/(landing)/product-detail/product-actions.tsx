"use client";

import { FiArrowRight, FiShoppingBag, FiChevronUp, FiChevronDown } from "react-icons/fi";
import Button from "../components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { Product } from "@/app/types";

type TProductActionsProps = {
    stock: number;
    product: Product;
}

const ProductActions = ({stock, product}: TProductActionsProps) => {
    const {additem} = useCartStore();
    const {push} = useRouter();
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
       additem(product, qty)
    };
    const handleCheckout = () => {
        additem(product, qty);
        push("/checkout");
    };

  return (
    <div className="flex gap-4 h-12">
        <div className="flex border border-gray-300 rounded-sm w-24 overflow-hidden bg-white">
            <div className="flex-[3] flex justify-center items-center font-semibold text-lg border-r border-gray-300">
                {qty}
            </div>
            <div className="flex flex-col flex-1">
                <button className="flex-1 flex justify-center items-center border-b border-gray-300 hover:bg-gray-100"
                    onClick={() => setQty(qty < stock ? qty + 1 : stock)}>
                    <FiChevronUp size={14}/>
                </button>
                <button className="flex-1 flex justify-center items-center hover:bg-gray-100"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                    <FiChevronDown size={14}/>
                </button>
            </div>
        </div>
    <Button className="px-10 flex-1 flex items-center justify-center gap-2" onClick={handleAddToCart}>
        <FiShoppingBag size={20} /> Add to Cart </Button>
    <Button variant="dark" className="px-10 flex items-center justify-center gap-2" onClick={handleCheckout}>   
        Checkout Now <FiArrowRight size={24} />
    </Button>
    </div>
  );
};

export default ProductActions;