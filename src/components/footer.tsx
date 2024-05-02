import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/Logo-White.svg';
import twitterIcon from '@/assets/icons/Twitter.svg';
import facebookIcon from '@/assets/icons/Facebook.svg';
import tikTokIcon from '@/assets/icons/TikTok.svg';
import instagramIcon from '@/assets/icons/Instagram.svg';

export function Footer() {
    return (
        <footer className='bg-black w-full h-[504px] px-40 py-[104px] flex flex-col gap-6'>
            <div className='w-[1120px] h-64 flex justify-between gap-28'>
                <div className='w-[384px] flex flex-col gap-6'>
                    <Image
                        src={logo} 
                        alt='logo'
                    />
                    <span className='font-medium text-sm text-[#CFCFCF]'>
                        We are a residential interior design firm located in Portland. 
                        Our boutique-studio offers more than
                    </span>
                </div>

                <div className='flex gap-8'>
                    <section className='flex flex-col gap-2 w-[295px]'>
                        <span className='font-semibold text-white'>
                            Services
                        </span>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Bonus program
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Gift cards
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                           Credit and payment
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Service contracts
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Non-cash account
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Payment
                        </Link>
                    </section>

                    <section className='flex flex-col gap-2 w-[295px]'>
                        <span className='font-semibold text-white'>
                            Assistance to the buyer
                        </span>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Find an order
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Terms of delivery
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                           Exchange and return of goods
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Guarantee
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Frequently asked questions
                        </Link>
                        <Link
                            className='text-sm text-[#CFCFCF] leading-8' 
                            href='#'
                        >
                            Terms of use of the site
                        </Link>
                    </section>
                </div>
            </div>

            <div className='flex gap-9'>
                <Link href='#'>
                    <Image src={twitterIcon} alt='twitter icon' />
                </Link>
                <Link href='#'>
                    <Image src={facebookIcon} alt='facebook icon' />
                </Link>
                <Link href='#'>
                    <Image src={tikTokIcon} alt='tiktok icon' />
                </Link>
                <Link href='#'>
                    <Image src={instagramIcon} alt='instagram icon' />
                </Link>
            </div>
        </footer>
    );
}