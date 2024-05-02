import SummerSaleBanner1 from '@/assets/summerSale/Summer-Sale-Banner1.png';
import SummerSaleBanner2 from '@/assets/summerSale/Summer-Sale-Banner2.png';
import Image from 'next/image';


export function BigSummerSale() {
    return (
        <section className='z-0 w-full h-[448px] flex items-center justify-between bg-gradient-to-r from-[#2E2E2E] to-[#000000]'>
            <Image 
                className='h-full'
                src={SummerSaleBanner1} 
                alt="banner"
             />

            <div className='flex items-center justify-center flex-col gap-10 mt-14 text-center'>
                <div className=''>
                    <span className='text-7xl text-[#FFFFFF] '>
                        Big Summer {' '}
                        <strong>Sale</strong>
                    </span>

                    <p className='text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                </div>

                <button className='w-[184px] h-14 px-12 py-4 rounded-md font-medium border-2 border-white text-white'>
                    Shop Now
                </button>
            </div>

            <Image
                className='z-10'
                src={SummerSaleBanner2} 
                alt="banner"
            />
        </section>
    );
}