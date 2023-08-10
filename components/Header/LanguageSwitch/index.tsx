"use client"
import React, { FC, useState } from 'react'

interface LanguageSwitchProps {
  
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({  }) => {
    const [language,setLanguage] = useState<"EN"|"TR">('EN')
    const style = {
        "active":"text-lg text-black cursor-pointer font-medium  duration-200 dark:text-white",
        "deactive":"text-lg text-gray-400 cursor-pointer font-medium"
    }
    {/*  <>
      <h3 className={language==='EN'?style.active:style.deactive} onClick={() => setLanguage('EN')}>EN</h3>
      <span className='w-px h-full bg-black dark:bg-white'/>
      <h3 className={language==='TR'?style.active:style.deactive} onClick={() => setLanguage('TR')}>TR</h3>
    </>*/}
  return (
    <div onClick={() => setLanguage(language==='EN'?'TR':'EN')} className='rounded-full w-11 h-11 flex justify-center p-2 border-2 border-stone-950 cursor-pointer dark:border-white'>
      <h2 className="text-black dark:text-white font-söhne">{language}</h2>
    </div>
  )
}

export default LanguageSwitch;