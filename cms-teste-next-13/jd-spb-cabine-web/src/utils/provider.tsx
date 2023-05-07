//"use client";

import * as React from 'react'
// import type { Session } from "next-auth"
// import { SessionProvider } from "next-auth/react"
//import { QueryClientProvider } from "react-query"
//import { ReactQueryDevtools } from "react-query/devtools"

//import { AuthProvider } from '@/contexts/AuthContext'
//import { queryClient } from "@/services/queryClient"

export default function Providers({ children, }: { children: React.ReactNode }) {
    return (
        <>
            {/* <AuthProvider> */}
            {/* <SessionProvider> */}
            {/* <QueryClientProvider client={queryClient}> */}
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider> */}
            {/* </SessionProvider> */}
            {/* </AuthProvider> */}
        </>
    )
}
