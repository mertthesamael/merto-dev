import Header from '@/components/Header'
import '@/styles/global.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { poppins, söhne, urbanist } from '@/libs/fonts'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mert Enercan',
  description: 'Fullstack Web Developer | NextJS | Mert Enercan',
}

export default async function LocaleLayout({
  children,params
}: {
  children: React.ReactNode,
  params:any
}) {

    const locale = useLocale();
 
    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
      notFound();
    }
   
  return (
    <html lang={locale}>
      <body className={`${söhne.variable} ${urbanist.variable} ${poppins.variable} bg-slate-100 dark:bg-black transition-all duration-200`}>
        <Header lang={locale}/>
        {children}
      </body>
    </html>
  )
}
