"use client"
import React, { FC, useState } from 'react'
import {useLocale} from 'next-intl';
import Link from "next-intl/link";
interface LanguageSwitchProps {
  lang:string
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({ lang }) => {
    
  return (
    <Link href={'/'} locale={lang==='en'?'tr':'en'} className='rounded-full w-11 h-11 flex justify-center p-2 border-2 border-stone-950 cursor-pointer dark:border-white'>
      <h2 className="text-black dark:text-white font-söhne">{lang.toUpperCase()}</h2>
    </Link>
  )
}

export default LanguageSwitch;