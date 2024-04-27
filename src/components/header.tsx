import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/Logo.svg';
import searchIcon from '@/assets/icons/search.svg';
import heartIcon from '@/assets/icons/heart.svg';
import cartIcon from '@/assets/icons/cart.svg';
import profileIcon from '@/assets/icons/profile.svg';


export function Header() {
    return (
        <header className='w-full max-w-[1440px] h-[88px] px-40 py-4 flex items-center justify-between'>
            <Image src={logo} alt='logo' />
            
            <div className='relative w-[372px] h-14 p-4 bg-[#F5F5F5]'>
                <Image 
                    src={searchIcon} 
                    alt='icone de pesquisa'
                    className='absolute left-4 top-1/2 -translate-y-1/2'
                 />
                <input
                    type="text"
                    className='w-full bg-[#F5F5F5] outline-none pl-8'
                    placeholder='Search'
                />
            </div>

            <nav className='h-5'>
                <ul className='w-full flex items-center justify-center gap-[52px]'>
                    <li>
                        <Link className='font-medium' href='#'>Home</Link>
                    </li>
                    <li>
                        <Link className='font-medium' href='#'>About</Link>
                    </li>
                    <li>
                        <Link className='font-medium' href='#'>Contact Us</Link>
                    </li>
                    <li>
                        <Link className='font-medium' href='#'>Blog</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-6'>
                <Image src={heartIcon} alt='icone de coração' />
                <Image src={cartIcon} alt='icone de carrinho' />
                <Image src={profileIcon} alt='icone de perfil' />
            </div>
        </header>
    );
}