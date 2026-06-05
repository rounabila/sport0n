import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const ProductData = [
    {
        id: 1, 
        name: "Sport0n Product",
        ImageUrl: "/images/products/product-1.png",
        category: "Footwear",
        price: 129999,
        stock: 50
    },
    {
        id: 2,
        name: "Sport0n Product 2",
        ImageUrl: "/images/products/product-2.png",
        category: "Running",
        price: 139999,
        stock: 5
    }
];

const ProductTable = () => {
    return (
        <div className="bg-white rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-4 px-6 font-semibold">Product</th>
                        <th className="py-4 px-6 font-semibold">Category</th>
                        <th className="py-4 px-6 font-semibold">Price</th>
                        <th className="py-4 px-6 font-semibold">Stock</th>
                        <th className="py-4 px-6 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductData.map((data, index) => (
                        <tr key={index} className="border-b border-gray-200 last:border-b-0">
                            <td className="py-4 px-6">
                               <div className="flex gap-2 items-center">
                                <div className="aspect-square bg-gray-100 rounded-md">
                                    <Image src={data.ImageUrl}
                                    alt={data.name}
                                    width={52} height={52}
                                    className="aspect-square object-contain" />
                                </div>
                                <span>{data.name}</span>
                               </div>
                            </td>
                            <td className="py-4 px-6">
                                <div className="rounded-lg bg-gray-100 px-2 py-1 w-fit">{data.category}</div>
                            </td>
                            <td className="py-4 px-6">{data.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                            <td className="py-4 px-6">{data.stock} units</td>
                            <td className="py-4 px-6">
                                <div className="flex gap-3 text-gray-600">
                                    <button className="cursor-pointer">
                                        <FiEdit2 size={20}/></button>
                                    <button className="cursor-pointer">
                                        <FiTrash2 size={20}/></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 

export default ProductTable;