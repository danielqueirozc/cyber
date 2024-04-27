import Image from "next/image";

interface CategoryCardProps {
    category: {
        Image: string;
        Name: string;
    }
}

export function CategoryCard({ category }: CategoryCardProps) {  
    return (
        <div className="w-40 h-32 rounded-[15px] flex flex-col gap-2 items-center justify-center bg-[#EDEDED]">
            <Image src={category.Image} alt="" />
            <span className="font-medium">{category.Name}</span>
        </div>
    );
}