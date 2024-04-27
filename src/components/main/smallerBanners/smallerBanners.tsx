import Image from 'next/image';

import playStation from '@/assets/products/PlayStation.png';   
import airPodsMax from '@/assets/products/airpods-max.png';
import appleVisionPro from '@/assets/products/apple-vision-pro.png';
import macBookPro from '@/assets/products/MacBook-Pro-14.png';

export function SmallerBanners() {
    return (
        <section className="w-full h-[600px] flex">
            <div className="min-w-[720px] h-full flex flex-col">
                <div className='card w-full flex items-center'>
                    <Image src={playStation} alt='PlayStation' />

                    <div className='flex flex-col gap-4 w-[338px]'>
                        <h1 className='text-[49px] font-medium'>Playstation 5</h1>
                        <span className='text-sm text-[#909090]'>
                            Incredibly powerful CPUs, GPUs, 
                            and an SSD with integrated I/O will 
                            redefine your PlayStation experience.
                        </span>
                    </div>
                </div>

                <div className='min-w-[720px] h-[272px] flex'>
                    <div className='card flex items-center gap-12 min-w-[360px] h-full bg-[#EDEDED]'>
                        <Image src={airPodsMax} alt='airpods max' />

                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[29px]'>
                                Apple 
                                <br /> 
                                AirPods{' '} 
                                <strong>Max</strong>
                            </h1>

                            <span className='text-[#909090] text-sm font-medium'>
                                Computational audio. <br />
                                Listen, it's powerful
                            </span>
                        </div>
                    </div>

                    <div className='card flex-1 bg-[#353535] flex items-center'>
                        <Image src={appleVisionPro} alt='apple vision pro' />

                        <div>
                            <h1 className='text-[29px] text-white'>
                                Apple 
                                <br /> 
                                Vision{' '} 
                                <strong>Pro</strong>
                            </h1>

                            <span className='text-[#909090] text-sm font-medium'>
                                An immersive way to <br />
                                experience entertainment
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card flex-1 flex items-center justify-center bg-[#EDEDED]'>
                <div className='w-[360px] flex flex-col gap-4'>
                    <h1 className='text-5xl'>
                        Macbook {' '}
                        <strong>Air</strong>
                    </h1>

                    <span className=''>
                        The new 15‑inch MacBook Air makes 
                        room for more of what you love 
                        with a spacious Liquid Retina display.
                    </span>

                    <button className='w-[184px] h-14 rounded-md px-12 py-4 border-2 border-black'>
                        <span>Shop Now</span>
                    </button>
                </div>

                <Image src={macBookPro} alt='macbook pro' />
            </div>
        </section>  
    );
}