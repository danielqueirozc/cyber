import Image from "next/image";

import { figtree } from "@/fonts/fonts";

import iphoneImage from '@/assets/Iphone-Image.svg'

export function Banner() {
    return (
        <section className="bg-[#211c24] w-full max-w-[1440px] h-[632px] flex items-center justify-center">
            <div className="w-[714px] h-[256px] flex justify-start flex-col gap-6">
                <h2 className={`${figtree.className} text-white/40`}>Pro.Beyond.</h2>
                <h1 className="text-white text-8xl">IPhone 14 <strong>Pro</strong></h1>
                <h3 className="text-[#909090] text-lg font-medium">Created to change everything for the better. For everyone</h3>

                <button className="w-[184px] h-14 px-12 py-4 text-white font-medium border-2 border-solid border-[#909090] rounded-md">
                    Shop Now
                </button>
            </div>

            <Image src={iphoneImage} alt="imagem de iphone 14 Pro" />
        </section>
    );
}