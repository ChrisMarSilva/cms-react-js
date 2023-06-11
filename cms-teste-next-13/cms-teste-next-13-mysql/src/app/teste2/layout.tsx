"use client"

import { useEffect } from "react";
//import { Metadata } from 'next';
import Head from "next/head";
import Script from "next/script";

// import "bootstrap/dist/css/bootstrap.min.css";
import './styles/fonts.googleapis.Roboto.Varela.Round.css';
import './styles/fonts.googleapis.material.icons.css';
import './styles/bootstrap.4.5.0.min.css';
import './styles/font.awesome.4.7.0.min.css';
import './styles/globals.css';

// export const metadata: Metadata = {
//   title: 'CMS MySQL Teste 2',
// }

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children, }: RootLayoutProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="NextJS MySQL CRUD tutorial" />
        <meta name="author" content="anand346@BePractical" />
        <meta name="og:url" content="https://www.linkedin.com/in/cristiano-martins-da-silva-a6b0ba111" />
        <title>CMS MySQL Teste 2</title>
        <Script src="https://code.jquery.com/jquery-3.5.1.min.js" crossOrigin="anonymous" rel="preload" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" crossOrigin="anonymous" rel="preload" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" crossOrigin="anonymous" rel="preload" />
      </Head>
      <body>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js" crossOrigin="anonymous" rel="preload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js" crossOrigin="anonymous" rel="preload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js" crossOrigin="anonymous" rel="preload" />
      </body>
    </html>
  )
}
