import { Eth } from '@/components/Icons/Eth';
import { Sol } from '@/components/Icons/Sol';
import React, { FC } from 'react'

interface DonateSectionProps {
    text:string
}

const DonateSection: FC<DonateSectionProps> = ({ text }) => {
  return (
    <section id='donate' className='w-full flex justify-center '>
     <div className="w-full max-w-screen-lg flex flex-col gap-5 mx-8">
        <div className='text-center'>
            <h2 className='text-md md:text-2xl text-black dark:text-white font-urbanist '>{text}</h2>
        </div>
        <div className='w-full flex items-center flex-col gap-6'>
            <div className='w-full flex items-center justify-center gap-4'>
                <Eth />
                <h2 className='text-black dark:text-white font-urbanist text-sm md:text-2xl'>0x4DDE5AF3397b0b5b6C8b6a2412F4F656a3667C5F</h2>
            </div>
            <div className='w-full flex items-center justify-center gap-4'>
                <Sol />
                <h2 className='text-black dark:text-white font-urbanist text-sm md:text-2xl'>merto.sol</h2>
            </div>
        </div>
     </div>
    </section>
  )
}

export default DonateSection;