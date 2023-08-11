import Image from 'next/image';
import React, { FC } from 'react'
import { Github } from '../Icons/Github';
import Link from 'next/link';

interface CardProps {
  
}

const Card: FC<CardProps> = ({  }) => {
  return (
    <div className="p-4  bg-slate-100 dark:bg-black dark:hover:bg-zinc-900 rounded-xl w-80 hover:bg-slate-300 transition-all duration-500 ease-out flex flex-col gap-6">
     <div className='w-full relative h-52 shadow-lg shadow-slate-00 dark:shadow-black rounded-xl overflow-hidden'>
        <Link href={'/'}>
            <Image src={"/project.png"} alt='Card Image' fill style={{objectFit:'cover'}}/>
        </Link>
     </div>
     <div className="flex flex-col gap-4">
        <div>
        <p className='text-md font-bold font-urbanist text-blue-800 dark:text-[#00FF7F]'>NextJS</p>
        <h2 className='text-xl font-söhne text-black dark:text-white font-bold leading-10'>Trakkor - Landing Page</h2>
        <p className='text-gray-400 font-poppins'>Framework agnostic, easy to use product onboarding package</p>
        </div>
        <div className='flex items-center gap-2'>
        <Github />
        <Link href={'/'} className='font-urbanist font-bold text-black dark:text-white text-md'>Go to repo</Link>
        </div>
     </div>
    </div>
  )
}

export default Card;