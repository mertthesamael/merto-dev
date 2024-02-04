import Header from '@/components/Header'
import '@/styles/global.css'
import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { poppins, söhne, urbanist } from '@/libs/fonts'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '../theme-provider'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Mert Enercan ',
  description: 'Fullstack Web Developer | NextJS | Mert Enercan',
  openGraph: {
    images: ['https://user-images.githubusercontent.com/79616834/274821212-dd04cf5b-bc3f-453b-9561-d1063791674b.png'],
  },
}
const locales = ['en', 'tr'];

export default function LocaleLayout({
  children
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale();
  const isValidLocale = locales.some((cur) => cur === locale);

  if (!isValidLocale) notFound();
  return (
    <html lang={locale}>
      <body className={`${söhne.variable} ${urbanist.variable} ${poppins.variable} bg-[#F3F3F3] dark:bg-black transition-all duration-200`}>
        <ThemeProvider attribute="class"
          defaultTheme="light"
        >
          <Header lang={locale} />
          {children}
        </ThemeProvider>
        <GoogleTagManager gtmId='GTM-PTPQ2C7Z'/>
      </body>
      <Analytics />
    </html>
  )
}
