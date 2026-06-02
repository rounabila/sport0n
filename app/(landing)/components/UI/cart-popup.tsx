import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

export const cartList = [
   { name: "Sport0n Product 1",
        category: "Running",
        price: 250000,
        qty: 2,
        imgUrl:"product-1.png",
    },
    { name: "Sport0n Product 2",
        category: "Running",
        price: 250000,
        qty: 1,
        imgUrl:"product-2.png",
    },
    { name: "Sport0n Product 3",
        category: "Running",
        price: 250000,
        qty: 5,
        imgUrl:"product-3.png",
    },
]

const CartPopup = () => {
    const{push} = useRouter();
    const{items, removeItem} = useCartStore();
    
    const totalPrice = items.reduce((sum, item) => sum + (item.qty * item.price), 0);
    console.log("Cart Item", items);

    const handleCheckout = () => {
        push('/checkout');
    }

    return (
        <div className=" absolute top-12 right-0 bg-white shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
            <div className="p-4 border-b border-gray-200 font-bold text-center"> Shopping Cart </div>
                {items.length ? items.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
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
                            <Button size="small" variant="ghost"
                            onClick= {() => removeItem(item._id)}> 
                                <FiTrash2 className="w-4 h-4 m-1/2 text-black"/>
                            </Button>
                    </div>
                )) : ( <div className="text-center opacity-50 py-5">
                    your shopping cart is empty
                </div>
            )}
                <div className="border-t border-gray-200 p-3 flex justify-between">
                    <span className="font-semibold text-sm"> Total </span>
                    <span className="text-primary text-sm font-medium">
                        Rp {totalPrice.toLocaleString("id-ID")}
                    </span>
                </div>
                <Button variant="dark" size="small" className="m-2 w-[calc(100%-1rem)] flex items-center justify-center gap-5 rounded-md" onClick={handleCheckout}>
                    Checkout Now <FiArrowRight/>
                </Button>
            </div>
    );
};

export default CartPopup;