import { ProductCard } from "./productCard";

import iphone14Pro from '@/assets/product/Iphone-14-pro.png';
import Camera from '@/assets/product/Camera.png';
import appleWatch from '@/assets/product/Apple-Watch.png';
import airPodsMax from '@/assets/product/Air-Pods-Max.png';
import samsungGalaxyWatch from '@/assets/product/Samsung-Galaxy-Watch.png';
import galaxyZFold from '@/assets/product/Galaxy-Z-Fold.png';
import galaxyBudsFE from '@/assets/product/Galaxy-Buds-FE.png';
import appleIpad9 from '@/assets/product/Apple-Ipad-9.png';

const product = [
    {
        id: 1,
        name: 'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)',
        image: iphone14Pro,
        price: '$900',
    },
    {
        id: 2,
        name: 'Blackmagic Pocket Cinema Camera 6k',
        image: Camera,
        price: '$2535',
    },
    {
        id: 3,
        name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case',
        image: appleWatch,
        price: '$399',
    },
    {
        id: 4,
        name: 'AirPods Max Silver',
        image: airPodsMax,
        price: '$549',
    },
    {
        id: 5,
        name: 'Samsung Galaxy Watch6 Classic 47mm Black',
        image: samsungGalaxyWatch,
        price: '$369',
    },
    {
        id: 6,
        name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
        image: galaxyZFold,
        price: '$1799',
    },
    {
        id: 7,
        name: 'Galaxy Buds FE',
        image: galaxyBudsFE,
        price: '$99.99',
    },
    {
        id: 8,
        name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
        image:appleIpad9,
        price: '$398',
    },
]

export function Products() {
    return (
        <section className="w-full h-[1056px] px-40 py-14 flex flex-col gap-8">
            <div className="w-[1120px] h-[32px] flex gap-8">
                <button>
                    New Arrival
                </button>

                <button>
                    Bestseller
                </button>

                <button>
                    Featured Products
                </button>
            </div>

            <div className="w-[1120px] grid grid-cols-4 gap-4">
                {product.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}
            </div>
        </section>
    );
}