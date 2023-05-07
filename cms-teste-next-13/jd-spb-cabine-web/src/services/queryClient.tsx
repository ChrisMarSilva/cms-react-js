//import { cache } from "react";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    //const queryClient = cache(() => new QueryClient({
    defaultOptions: {
        queries: {
            initialData: [],
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 30, // 30Seg
            //staleTime: 1000 * 50, // 1Min
            // staleTime: 60000, // 1 * 60 * 1000
            // refetchInterval: 1000 * 5, /* 5 seg */
        }
    }
})
//)

// export default queryClient;
