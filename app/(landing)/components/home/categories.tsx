import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
    { name: "Running",
        ImgUrl: "category-running.png",
    },
    { name: "Tennis",
        ImgUrl: "category-tennis.png",
    },
    { name: "Basketball",
        ImgUrl: "category-basketball.png",
    },
    { name: "Football",
        ImgUrl: "category-football.png",
    },
    { name: "Badminton",
        ImgUrl: "category-badminton.png",
    },
    { name: "Swimming",
        ImgUrl: "category-swimming.png",
    },
]

const CategoriesSection = () => {
return (
<section id="category-section"className="container mx-auto -mt-10 pb-10">
 <div className="flex justify-between">
<h2 className="font-bold text-2xl"> Browse By Categories </h2>
<Link href="#" className="flex gap-2 text-primary font-medium">
<span className="self-center">See All Categories</span>  
<FiArrowRight className="self-center"/>
</Link>
 </div>
 <div className="grid grid-cols-6 gap-12 mt-8">
    {categoryList.map((category, index) => (
<div 
    className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex flex-col items-center justify-center p-4"
    key={index}>
    <div className="self-center">
        <Image src={`/images/categories/${category.ImgUrl}`}
        alt={category.name}
        width={86} height={86}
        className="mb-[10px]"
        />
    </div>
        <div className="text-primary font-medium text-xl text-center">
            {category.name}
        </div>
     </div>
     ))}
     
 </div>
</section>
)

};

export default CategoriesSection;