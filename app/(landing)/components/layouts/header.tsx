"use client";

import Image from "next/image";
import Link from "next/link";
import {FiSearch, FiShoppingBag} from "react-icons/fi"
import CartPopup from "../UI/cart-popup";
import { useState } from "react";

function Header() {
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
    const cartList: { qty: number }[] = [];
    return (
        <header>
            <div className="flex justify-between gap-10 container mx-auto py-5">
                <Image
                    src="/images/logo.svg"
                    alt="sporton logo"
                    width={127}
                    height={30}
                />
                <nav className="flex gap-44">
                    <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-1 after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">
                        Home
                    </Link>
                    <Link href="#">Category</Link>
                    <Link href="#">Explore Products</Link>
                </nav>
                <div className="relative flex gap-10">
                    <FiSearch size={24} />
                    <button onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
                        <div className="relative cursor-pointer">
                            <FiShoppingBag size={24} />
                            <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white text-center leading-4">
                                {cartList.reduce((total, item) => total + item.qty, 0)}
                            </div>
                        </div>
                    </button>
                </div>
                {isCartPopupOpen && <CartPopup />}
            </div>
        </header>
    );
}

export default Header;