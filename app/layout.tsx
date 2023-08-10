import Header from '@/components/Header'
import '@/styles/global.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { poppins, söhne, urbanist } from '@/libs/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mert Enercan',
  description: 'Fullstack Web Developer | NextJS | Mert Enercan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${söhne.variable} ${urbanist.variable} ${poppins.variable} bg-slate-100 dark:bg-black transition-all duration-200`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
