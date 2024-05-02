'use client';

import appleWatch from '@/assets/product/Apple-Watch.png';
import airPodsMax from '@/assets/product/Air-Pods-Max.png';
import iphone14ProGold512GB from '@/assets/discountsProducts/Iphone-14-Pro-Gold-512GB.png';
import iphone14ProGold1TB from '@/assets/discountsProducts/Iphone-14-Pro-Gold-1TB.png';
import { DiscountsProductsCard } from './discountsProductsCard';

const product = [
    {
        id: 1,
        name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
        image: iphone14ProGold512GB,
        price: '$1437',
    },
    {
        id: 4,
        name: 'AirPods Max Silver',
        image: airPodsMax,
        price: '$549',
    },    
    {
        id: 3,
        name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
        image: appleWatch,
        price: '$399',
    },
    {
        id: 2,
        name: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
        image: iphone14ProGold1TB,
        price: '$1499',
    },
]

export function DiscountsProducts() {
    return (
        <section className="w-full h-[656px] px-40 py-20 flex flex-col gap-8">
            <h1 className='font-medium text-[24px]'>Discounts up to -50%</h1>

            <div className="w-[1120px] grid grid-cols-4 gap-4">
                {product.map(product => {
                    return <DiscountsProductsCard product={product} key={product.id} />
                })}
            </div>
        </section>
    );
}