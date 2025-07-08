import Header from '@/components/Header'
import '@/styles/global.css'
import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { poppins, söhne, urbanist } from '@/libs/fonts'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ThemeProvider } from '../theme-provider'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script'

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
      <head>
        <Script id='sgtm-code'>
          {
            `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://hardalgtm.merto.dev/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PTPQ2C7Z');
          `
          }
        </Script>
        <Script src="https://signal.merto.dev/hardal" data-website-id="cmbqikkok0001xxoyhmoa0ls5" data-host-url="https://signal.merto.dev" data-auto-track="true"/>
      </head>
      <body className={`${söhne.variable} ${urbanist.variable} ${poppins.variable} bg-[#F3F3F3] dark:bg-black transition-all duration-200`}>
      <noscript><iframe src="https://hardalgtm.merto.dev/ns.html?id=GTM-PTPQ2C7Z"
height="0" width="0" style={{"display":"none","visibility":"hidden"}}></iframe></noscript>
        <ThemeProvider attribute="class"
          defaultTheme="light"
        >
          <Header lang={locale} />
          {children}
        </ThemeProvider>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
        !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1027652965507750');
fbq('track', 'PageView');
        `}
        </Script>
        <noscript><img height="1" width="1" style={{ "display": "none" }}
          src="https://www.facebook.com/tr?id=1027652965507750&ev=PageView&noscript=1"
        /></noscript>
      </body>
      <Analytics />
    </html>
  )
}


