//import './globals.css'
import { Metadata } from 'next'
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CMS MySQL',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children, }: RootLayoutProps) { // ({ children, }: { children: React.ReactNode })
  return (
    <html lang="pt-BR">
      {/* <body className={inter.className}> */}
      <body>
        {children}
      </body>
    </html>
  )
}
