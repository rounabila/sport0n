"use client"

import Image from "next/image";
import ProductActions from "../../product-detail/product-actions";
import { productList } from "../../components/home/products";

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
   const resolvedParams=await params
    const { id } = resolvedParams

    const product = productList.find((p) => String(p.id) === String(id));

    if (!product) {
        return <div className="container mx-auto py-40 text-center">Product not found</div>;
    }

    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src={`/images/products/${product.imgUrl}`}
                 alt={product.name} 
                 className="aspect-square object-contain w-full" 
                 width={550} height={550}
                 priority />
            </div>
            <div>
            <div className="w-full py-7">
                <h1 className="text-5xl font-bold mb-6">{product.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit">
                    {product.category || "Football"}
                </div>
            </div>
            <div>
                <p className="leading-loose mb-8">
                   {product.description || "The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction."}
                </p>
            </div>
            <div className="text-primary text-[32px] font-semibold mb-12">
                {Intl.NumberFormat("id-ID",
                    { style: "currency", currency: "IDR"}).format(product.price || 0)}
            </div>
            <ProductActions product={product} />
        </div>
        </main>
    )
}

export default ProductDetail;