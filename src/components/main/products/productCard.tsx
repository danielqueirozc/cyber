'use client';

import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        image:  StaticImageData;
        price: string;
    }
}

import like from '@/assets/icons/Like.svg';
import { Heart } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

export function ProductCard({ product }: ProductCardProps) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='w-[268px] h-[432px] bg-[#F6F6F6] rounded-[9px] px-4 py-6 flex items-center justify-between flex-col gap-4'>
            <div className='w-full flex justify-end'>
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`${isLiked ? 'text-red-500' : 'text-[#919191]'}`}
                >

                    <svg 
                        width="26" 
                        height="24" 
                        viewBox="0 0 26 24" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.93415 13.5443L12.3152 22.3569C12.6397 22.6616 12.8019 22.814 12.9999 22.814C13.1979 22.814 13.3602 22.6616 13.6846 22.3569L23.0657 13.5443C25.6739 11.0942 25.9907 7.06217 23.797 4.2348L23.3845 3.70316C20.7603 0.320813 15.4928 0.88806 13.6488 4.75157C13.3883 5.29732 12.6115 5.29732 12.351 4.75157C10.5071 0.88806 5.23955 0.320813 2.61531 3.70316L2.20284 4.2348C0.00918293 7.06217 0.325915 11.0942 2.93415 13.5443Z" stroke="" stroke-opacity="0.77" stroke-width="1.4"/>
                    </svg>
                   
                </button>
            </div>

            <Image src={product.image} alt={product.name} />

            <div className='flex flex-col items-center gap-6'>
               <div className='w-full flex items-center flex-col gap-4'>
                    <span className='font-medium text-sm'>{product.name}</span>
                    <strong>{product.price}</strong>
               </div>

                <button className='rounded-lg bg-[#000000] text-white px-16 py-3'>
                    Buy Now
                </button>
            </div>
        </div>
    );

}