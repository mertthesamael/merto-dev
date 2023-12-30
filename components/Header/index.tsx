import Link from 'next/link';
import React, { FC } from 'react'
import HeaderButton from '../Buttons/HeaderButton';
import { headerButtons } from './constants';

interface HeaderProps {
  lang:string
}

const Header: FC<HeaderProps> = ({ lang }) => {
  return (
    <header className="w-full transition-all duration-200 fixed bg-slate-100/40 dark:bg-black/30 top-0 backdrop-blur-lg h-[--header-height] py-4 flex justify-center z-20">
        <div className='w-full max-w-screen-lg h-full flex items-center justify-between mx-8'>
            <div>
              <Link href={'/'} className="text-3xl text-black font-poppins font-extrabold hover:text-[#00FF7F]  transition-all duration-300 dark:text-white dark:hover:text-[#00FF7F]">merto</Link>
            </div>
            <div className='flex gap-16'>
                <div className='flex gap-2 md:gap-4 items-center '>
                 {headerButtons.map((el, _i) => <HeaderButton key={_i} lang={lang} variant={el.variant} icon={el.icon}/>)}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;