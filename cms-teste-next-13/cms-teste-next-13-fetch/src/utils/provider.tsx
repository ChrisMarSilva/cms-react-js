//"use client";

//import React from "react"
import * as React from 'react'
import { QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { queryClient } from "@/services/queryClient"

export default function Providers({ children, }: { children: React.ReactNode }) {
    // const [queryClient] = React.useState(() => new QueryClient())
    return (
        <>
            {/* <QueryClientProvider client={queryClient}> */}
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} />
         </QueryClientProvider> */}
        </>
    )
}