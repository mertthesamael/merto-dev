"use client"
import React, { FC, useEffect, useState } from 'react'

interface ThemeButtonProps {
  
}

const ThemeButton: FC<ThemeButtonProps> = ({  }) => {
  
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme','dark')
      document.documentElement.classList.add('dark')
  
    }
  }
  const themeHandler = () => {
    if(localStorage.theme==='dark'){
      document.documentElement.classList.remove('dark')
      localStorage.theme='light'
    }else{
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    }
  } 
   useEffect(() => {
   
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  },[])

  return (
    <div onClick={themeHandler} className="rounded-full h-11 w-11  p-2 border-2 border-stone-950 cursor-pointer dark:border-white">
     <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"  className="dark:stroke-white stroke-black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </div>
  )
}

export default ThemeButton;