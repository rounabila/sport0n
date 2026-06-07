"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../UI/button";
import { FiPlus } from "react-icons/fi";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductsProps = {
    products: Product[];
}

const ProductsSection = ({ products }: TProductsProps) => {
   const {additem}= useCartStore();

   const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); 
    e.stopPropagation();
     additem(product)
 }
    return(
        <section id="product-section" className="container mx-auto mt-30 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-10">
                <span className="text-primary"> OUR </span> PRODUCTS
            </h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.map((product,) => (
                        <Link href={`/product/${product._id}`} 
                        key={product._id} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                                <Image src={getImageUrl(product.imageUrl)}
                                        alt={product.name}
                                        width={300} height={300}
                                        className="aspect-square object-contain"/>
                                        <Button className="w-10 h-10 !p-2 absolute right-3 top-3" onClick={(e) => handleAddtoCart(e,product)} >
                                            <FiPlus size={24} /></Button>
                            </div>
                            <h3 className="font-medium text-lg ab-1.5 mt-4">{product.name}</h3>
                            <div className="flex justify-between ab-10">
                                <div className="text-grey-500">{product.category.name} </div>
                                <div className="font-medium text-primary">
                                    {Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        minimumSignificantDigits: 1
                                    }).format(product.price)}
                                        </div>
                            </div>
                        </Link>
                    )
                    )}
            </div>

        </section>
    );
};

export default ProductsSection;