import { poppins, söhne, urbanist } from '@/libs/fonts';
import { ReactNode } from 'react';
import type { Metadata } from 'next'

type Props = {
  children: ReactNode;
};
export const metadata: Metadata = {
  title: 'Mert Enercan ',
  description: 'Fullstack Web Developer | NextJS | Mert Enercan',
  openGraph: {
    images: ['https://user-images.githubusercontent.com/79616834/274821212-dd04cf5b-bc3f-453b-9561-d1063791674b.png'],
  },
}
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children
}