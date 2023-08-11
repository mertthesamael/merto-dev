import Link from 'next/link';
import React, { FC } from 'react'
import LanguageSwitch from './LanguageSwitch';
import ThemeButton from '../Buttons/ThemeButton';
import DonateButton from '../Buttons/DonateButton';

interface HeaderProps {
  lang:string
}

const Header: FC<HeaderProps> = ({ lang }) => {
  return (
    <header className="w-full h-20 py-4 flex justify-center">
        <div className='w-full max-w-screen-lg h-full flex items-center justify-between mx-8'>
            <div>
              <Link href={'/'} className="text-3xl text-black font-poppins font-extrabold hover:text-[#00FF7F]  transition-all duration-300 dark:text-white dark:hover:text-[#00FF7F]">merto</Link>
            </div>
            <div className='flex gap-16'>
                <div className='md:flex gap-4 items-center hidden'>
                  <ThemeButton />
                 <DonateButton />
                 <LanguageSwitch lang={lang}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;