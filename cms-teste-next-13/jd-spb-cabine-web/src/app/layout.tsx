import { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

//import './globals.css'
import './../styles/style-sheet.css'
import './../styles/nav-bar.css'
import './../styles/side-bar.css'
import './../styles/tabela.css'
import './../styles/acesso-rapido.css'

import Providers from '@/utils/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '..:: JDSPB Cabine Web ::..',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" type="text/css" href="./../styles/bootstrap-5.0.2-dist/css/bootstrap.min.css" media="screen" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} w-100 h-100`}>
        <Providers>
          {children}
        </Providers>
        {/* <script type="text/javascript" src="./../styles/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js" /> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" /> */}
        {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous" /> */}
      </body>
    </html>
  )
}
