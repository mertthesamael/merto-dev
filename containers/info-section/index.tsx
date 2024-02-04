import Link from 'next/link';
import React, { FC } from 'react'
import { Socials } from './constants';
interface InfoSectionProps {
  info:any,
  welcome:any,
}

const InfoSection: FC<InfoSectionProps> = ({ info,welcome }) => {
  return (
    <section className="w-full flex justify-center">
        <div className="w-full max-w-screen-lg mx-8 flex flex-col gap-10 py-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-urbanist text-black dark:text-white">👋 {welcome} <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black font-söhne">Mert Enercan</span></h1>
          </div>
          <div>
            <p className="text-xl md:text-2xl text-black/80 dark:text-gray-400  md:leading-10" dangerouslySetInnerHTML={{__html:info}}></p>
          </div>
          <div className='flex gap-4'>
            {Socials.map((el, _i) => <Link key={_i} aria-label='Social Media Link' href={el.href} target='_blank'>{el.icon}</Link>)}
          </div>
        </div>
    </section>
  )
}

export default InfoSection;