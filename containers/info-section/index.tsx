import Link from 'next/link';
import React, { FC } from 'react'
import { Socials } from './constants';

interface InfoSectionProps {
  
}

const InfoSection: FC<InfoSectionProps> = ({  }) => {
  return (
    <section className="w-full flex justify-center">
        <div className="w-full max-w-screen-lg mx-8 flex flex-col gap-10 py-4">
          <div>
            <h1 className="text-4xl font-urbanist text-black dark:text-white">👋 Hey there, this is <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black font-söhne">Mert Enercan</span></h1>
          </div>
          <div>
            <p className="text-2xl text-gray-400 leading-10">A <span className='text-black dark:text-white'>frontend web developer</span> that using <span className='text-black dark:text-white'>NextJS</span> and <span className='text-black dark:text-white'>TypeScript.</span> You can reach me via socials below or <Link href={'mailto:mertenercan@gmail.com'} className='text-black dark:text-white underline'>mertenercan@gmail.com</Link></p>
          </div>
          <div className='flex gap-4'>
            {Socials.map((el, _i) => <Link key={_i} href={el.href} target='_blank'>{el.icon}</Link>)}
          </div>
        </div>
    </section>
  )
}

export default InfoSection;