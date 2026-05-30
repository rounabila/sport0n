"use client";

import { FiArrowRight, FiShoppingBag, FiChevronUp, FiChevronDown } from "react-icons/fi";
import Button from "../components/UI/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cartList } from "../components/UI/cart-popup";

const ProductActions = ({ product }: { product: any }) => {
    const {push} = useRouter();
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        if (!product) return;
       
    const existingProduct= cartList.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.qty += qty;
    } else {
        cartList.push({ ...product, qty });
    }
    alert(`${product.name} added to cart!`);
};

    const Checkout = () => {
   if (!product) return;
   handleAddToCart();
   push('/checkout');
};

  return (
    <div className="flex gap-4 h-12">
        <div className="flex border border-gray-300 rounded-sm w-24 overflow-hidden bg-white">
            <div className="flex-[3] flex justify-center items-center font-semiboldtext-lg border-r border-gray-300">
                {qty}
            </div>
            <div className="flex flex-col flex-1">
                <button className="flex-1 flex justify-center items-center border-b border-gray-300 hover:bg-gray-100"
                    onClick={() => setQty(qty + 1)}>
                    <FiChevronUp size={14}/>
                </button>
                <button className="flex-1 flex justify-center items-center hover:bg-gray-100"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                    <FiChevronDown size={14}/>
                </button>
            </div>
        </div>
      <Button className="px-10 flex-1 flex items-center justify-center gap-2"><FiShoppingBag size={20} /> Add to Cart </Button>
    <Button variant="dark" className="px-10 flex-1 flex items-center justify-center gap-2" onClick={() => push('/checkout')}>
        Checkout Now <FiArrowRight size={24} />
    </Button>
    </div>
  );
};

export default ProductActions;