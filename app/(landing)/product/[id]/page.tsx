import Image from "next/image";
import ProductActions from "../../product-detail/product-actions";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
    params: Promise<{
        id: string;
    }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
    const { id } = await params;

    const product = await getProductDetail(id);
    console.log(product)

    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src={getImageUrl(product.imageUrl)}
                 alt={product.name}
                 className="aspect-square object-contain w-full" 
                 width={550} height={550}
                 priority />
            </div>
            <div>
            <div className="w-full py-7">
                <h1 className="text-5xl font-bold mb-6"> {product.name} </h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit">
                    {product.category.name}
                </div>
            </div>
            <div>
                <p className="leading-loose mb-8">
                  {product.description}
                </p>
            </div>
            <div className="text-primary text-[32px] font-semibold mb-12">
                {Intl.NumberFormat("id-ID",
                    { style: "currency", currency: "IDR"}).format(product.price)}
            </div>
            <ProductActions stock={product.stock} product={product}/>
        </div>
        </main>
    )
}

export default ProductDetail;