import localFont from '@next/font/local'
import { Urbanist, Poppins } from '@next/font/google'
export const söhne = localFont({
    src: [
      {
        path: '../public/fonts/TestSöhne/TestSöhne-Buch.otf',
        weight: '400'
      },
      {
        path: '../public/fonts/TestSöhne/TestSöhne-Extraleicht.otf',
        weight: '200'
      },
      {
        path: '../public/fonts/TestSöhne/TestSöhne-Halbfett.otf',
        weight: '600'
      },
    ],
    variable: '--söhne',
    display:'swap',
})


export const urbanist = Urbanist({
  subsets:['latin'],
  weight:['300','400','600','500','700'],
  variable: '--urbanist',
  display:'swap',

})

export const poppins = Poppins({
  subsets:['latin'],
  weight:['300','400','600','500','700','800','900'],
  variable: '--poppins',
  display:'swap',

})

