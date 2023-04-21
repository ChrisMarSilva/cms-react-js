//import '@/styles/globals.css'
//import type { AppProps } from 'next/app'
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp