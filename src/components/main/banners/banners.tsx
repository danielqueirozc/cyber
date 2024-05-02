import popularBanners from '@/assets/banners/Popular Products.png';
import ipadPro from '@/assets/banners/Ipad-Pro.png';
import samsungGalaxy from '@/assets/banners/Samsung-Galaxy.png';
import macBookPro from '@/assets/banners/MacBook-Pro.png';
import { BannersCard } from './bannersCard';

const banners = [
    {
        image: popularBanners,
        title: 'Popular Products',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
    },
    {
        image: ipadPro,
        title: 'Ipad Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        variant: 100,
    },
    {
        image: samsungGalaxy,
        title: 'Samsung Galaxy ',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        variant: 300
    },
    {
        image: macBookPro,
        title: 'MacBook Pro',
        description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        variant: 800,
        color: 'white',
    }
]

export function Banners() {
    return (
        <section className="w-full h-[640px] grid grid-cols-4">
            {banners.map(banner => {
                return <BannersCard banner={banner} />
            })}
        </section>
    );
}