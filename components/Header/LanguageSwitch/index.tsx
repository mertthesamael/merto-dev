"use client"
import React, { FC, useState } from 'react'

interface LanguageSwitchProps {
  
}

const LanguageSwitch: FC<LanguageSwitchProps> = ({  }) => {
    const [language,setLanguage] = useState<"EN"|"TR">('EN')

  return (
    <div onClick={() => setLanguage(language==='EN'?'TR':'EN')} className='rounded-full w-11 h-11 flex justify-center p-2 border-2 border-stone-950 cursor-pointer dark:border-white'>
      <h2 className="text-black dark:text-white font-söhne">{language}</h2>
    </div>
  )
}

export default LanguageSwitch;