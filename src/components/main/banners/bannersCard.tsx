import Image, { StaticImageData } from "next/image";

interface BannerCardProps {
   banner: {
       image: StaticImageData;
       title: string;
       description: string;
       variant?: number;
       color?: string;
   }
}

export function BannersCard({ banner }: BannerCardProps) {
    return (
        <div 
            className={
                `${banner.variant === 100 ? 'bg-[#F9F9F9]' : 
                banner.variant === 300 ? 'bg-[#EAEAEA]' : 
                banner.variant === 800 ? 'bg-[#2C2C2C]' :
                'bg-white'} w-[360px] h-full flex flex-col
                justify-center items-center
                gap-6 px-8 pb-14 card`
            }
        >
            <Image
                className="w-[360px] h-[360px]"
                src={banner.image} 
                alt={banner.title}
             />

            <div className={`${banner.color ? 'text-[#FFFFFF]' : 'text-[#000000]'} flex flex-col gap-2`}>
                <h1 className="text-[33px]">{banner.title}</h1>
                <span className="font-medium text-sm text-[#909090]">{banner.description}</span>

                <button className="font-medium w-[184px] h-14 rounded-md px-12 py-4 border-[3px] border-[#909090]">
                    Shop Now
                </button>
            </div>
        </div>
    );
}