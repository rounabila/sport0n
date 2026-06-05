"use client";

import Link from "next/link";
import Image from "next/image";
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const menuItems = [
        { name: "Products", icon: FiBox, link: "/admin/products" },
        { name: "Categories", icon: FiLayers, link: "/admin/categories" },
        { name: "Transactions", icon: FiShoppingCart, link: "/admin/transactions" },
        { name: "Bank Information", icon: FiCreditCard, link: "/admin/bank-info" },
    ];

    return (
     <aside className="h-screen w-80 border-r border-gray-100 flex flex-col bg-white fixed left-0 top-0">
        <div className="mb-4 border-b border-gray-200 px-10 py-4">
            <Image src="/images/logo-admin.svg" 
            alt="Logo admin" 
            width={215} height={36} 
            />
        </div>
        <div className="flex flex-1 flex-col gap-2 mx-5">
            {menuItems.map((item, index) => {
                const isActive = item.link === pathname;
                return (
                    <Link
                        href={item.link}
                        key={index}
                        className={`flex items-center gap-3 py-2 px-5 ${isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"}`}
                    >
                        <item.icon size={24} />
                        <span>{item.name}</span>
                    </Link>
                );
            })}
        </div>
        <Link href="/admin/login" className ="mb-10 items-center flex gap-3 font-medium px-5 py-2 hover:bg-gray-100 duration-300">
        <FiLogOut size={24}/> Log Out
        </Link>
     </aside>   
    );
}

export default Sidebar;