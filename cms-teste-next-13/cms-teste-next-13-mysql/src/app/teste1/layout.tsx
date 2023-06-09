//import "@/styles/globals.scss";
import './styles/globals.scss'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CMS MySQL Teste 1',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
