import { Metadata } from 'next'
import Header from '@/app/_components/Header'

export const metadata: Metadata = {
  title: 'カウンター',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header title='カウンター' />
      {children}
    </>
  )
}
