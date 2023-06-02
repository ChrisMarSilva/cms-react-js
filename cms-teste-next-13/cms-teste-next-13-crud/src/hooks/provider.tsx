'use client'

import { queryClient } from '@/services/queryClient';
import { QueryClientProvider, } from '@tanstack/react-query'

type QueryProviderProps = {
    children: React.ReactNode;
}

function QueryProvider({ children }: QueryProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider >
    )
}

export default QueryProvider;
