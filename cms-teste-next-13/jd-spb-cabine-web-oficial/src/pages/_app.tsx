import type { AppProps } from 'next/app'
import Head from 'next/head'
//import Script from 'next/script'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//import ReduxProvider from '@/store/provider';
import { AuthProvider } from '@/contexts/AuthContext'
import { queryClient } from "@/services/queryClient"

import '@/styles/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import '@/styles/style-sheet.css'
import '@/styles/nav-bar.css'
import '@/styles/side-bar.css'
import '@/styles/tabela.css'
import '@/styles/acesso-rapido.css'
import '@/styles/cadastro.css'

export default function App({ Component, pageProps }: AppProps) { // export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <>

      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/favicon.svg" /> */}
        {/* <link rel="stylesheet" type="text/css" href="@/styles/bootstrap-5.0.2-dist/css/bootstrap.min.css" media="screen" /> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />   */}
      </Head>

      {/* <ReduxProvider> */}
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
      {/* </ReduxProvider> */}

      {/* <script type="text/javascript" src="./../styles/bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js" strategy="afterInteractive"  /> */}
      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous" strategy="afterInteractive" />
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous" strategy="afterInteractive" /> */}
    </>
  )
}
