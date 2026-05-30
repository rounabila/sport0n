"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../UI/button";
import { FiPlus } from "react-icons/fi";

export const productList = [    
    {   id: "1",
        name: "SportOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl:"product-1.png",
        description: "The SportOn Slowlivin is designed for those who embrace a laid-back lifestyle without compromising on style. With its sleek silhouette and vibrant color options, this shoe is perfect for casual outings and everyday wear. Crafted with comfort in mind, the Slowlivin features a cushioned sole and breathable materials, making it the ideal choice for those who want to stay comfortable while looking effortlessly cool."
    },
    {   id: "2",
        name: "SportOn Rockets Tennis",
        category: "Tennis",
        price: 999000,
        imgUrl:"product-2.png",
        description: "The SportOn Rockets Tennis shoe is engineered for the competitive player who demands both performance and style on the court. Featuring a sleek design with bold color accents, these shoes provide exceptional support and traction for quick lateral movements. The Rockets Tennis shoe is built with advanced cushioning technology to keep you comfortable during long matches, while its durable construction ensures it can withstand the rigors of intense play."
    },
    {   id: "3",
        name: "SportOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl:"product-3.png",
        description: "The SportOn Hyperfast Shoes are designed for runners who crave speed and agility. With a lightweight construction and aerodynamic design, these shoes help you achieve your fastest times on the track or road. The Hyperfast features responsive cushioning that provides energy return with every stride, while its breathable upper keeps your feet cool during intense workouts. Whether you areining for a marathon or looking to set a new personal best, the Hyperfast is your go-to shoe for peak performance."
    },
    {   id: "4",
        name: "SportOn HyperSoccer v2",
        category: "Football",
        price: 458000,
        imgUrl:"product-4.png",
        description: "The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.",
    },
    {   id: "5",
        name: "SportOn Slowlivin Pro",
        category: "Running",
        price: 119000,
        imgUrl:"product-5.png",
        description: "The SportOn Slowlivin Pro takes the laid-back style of the original Slowlivin to the next level with enhanced performance features. Designed for those who want to stay comfortable while pushing their limits, the Slowlivin Pro offers improved cushioning and support for longer runs and more intense workouts. With its sleek design and vibrant color options, this shoe is perfect for both casual outings and serious training sessions."
    },
    {   id: "6",
        name: "SportOn Rockets Basketball",
        category: "Basketball",
        price: 600000,
        imgUrl:"product-6.png",
        description: "The SportOn Rockets Basketball shoe is built for the serious player who demands peak performance on the court. With its innovative design and advanced support features, these shoes provide the stability and cushioning needed for explosive movements and long games. The Rockets Basketball shoe combines style and functionality to help you dominate the game."
    },
    {   id: "7",
        name: "SportOn Rockets Tennis Pro",
        category: "Tennis",
        price: 999000,
        imgUrl:"product-7.png",
        description: "The SportOn Rockets Tennis Pro shoe is the pinnacle of performance and style for the competitive player. With its advanced engineering and premium materials, these shoes deliver unmatched support and traction for powerful serves and swift movements on the court."
    },
    {   id: "8",
        name: "SportOn Hyperfast Pro Shoes",
        category: "Running",
        price: 329000,
        imgUrl:"product-8.png",
        description: "The SportOn Hyperfast Pro Shoes are designed for runners who demand the ultimate in speed and performance. With a lightweight construction and aerodynamic design, these shoes help you achieve your fastest times on the track or road. The Hyperfast Pro features responsive cushioning that provides energy return with every stride, while its breathable upper keeps your feet cool during intense workouts. Whether you're training for a marathon or looking to set a new personal best, the Hyperfast Pro is your go-to shoe for peak performance."
    },
]

const ProductsSection = () => {
    return(
        <section id="product-section" className="container mx-auto mt-30 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-10">
                <span className="text-primary"> OUR </span> PRODUCTS
            </h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    productList.map((product, index) => (
                        <Link href={`/product/${product.id}`} 
                        key={product.id} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                                <Image src={`/images/products/${product.imgUrl}`}
                                        alt={product.name}
                                        width={300} height={300}
                                        className="aspect-square object-contain"/>
                                        <Button className="w-10 h-10 !p-2 absolute right-3 top-3"><FiPlus size={24} /></Button>
                            </div>
                            <h3 className="font-medium text-lg ab-1.5 mt-4">{product.name}</h3>
                            <div className="flex justify-between ab-10">
                                <div className="text-grey-500">{product.category} </div>
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