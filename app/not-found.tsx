'use client';
import { söhne } from '@/libs/fonts';
import Link from 'next/link';
import '@/styles/global.css'
// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
    return (
        <html lang="en" className={söhne.className}>
            <title>Not Found :/</title>
                <body className='w-screen h-screen grid place-items-center bg-black'>
                    <Link href={'/en'} className='transition-all font-bold text-[6rem] hover:text-[#00FF7F]'>4 0 4</Link>
                </body>
        </html>
    );
}
