import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from 'next';
//import Head from "next/head";
import { Inter } from 'next/font/google';
import Providers from '@/store/provider';
import QueryProvider from '@/hooks/provider';
//import { wrapper } from '@/store';

export const metadata: Metadata = {
  title: 'CMS Crud',
  description: 'CMS First Crud in NextJS',
}

type RootLayoutProps = {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      {/* <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}
      <body className={inter.className}>
        <Providers>
          <QueryProvider>
            {children}
          </QueryProvider>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;
//export default wrapper.withRedux(RootLayout);
