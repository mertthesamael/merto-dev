"use client"

import React, { FC } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

type ProvidersProps = {
  children:React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LdoEzsqAAAAAOoGg-teRZWrDzwMumWd6VpUGCsc'>
     {children}
    </GoogleReCaptchaProvider>
  )
}

export default Providers;