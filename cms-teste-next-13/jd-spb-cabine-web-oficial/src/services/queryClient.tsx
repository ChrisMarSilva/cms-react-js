import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            initialData: [],
            retry: 1,
            staleTime: 5 * 1000, // refetchInterval: 1000 * 5, /* 5 seg */ // staleTime: 1000 * 60 * 30, // 30Seg // staleTime: 1000 * 50, // 1Min // staleTime: 60000, // 1 * 60 * 1000
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            //refetchOnmount: false,
        }
    }
})

