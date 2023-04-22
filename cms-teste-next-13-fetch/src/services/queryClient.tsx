//import { cache } from "react";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    //const queryClient = cache(() => new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 30, // 30Seg
            //staleTime: 1000 * 50, // 1Min
        }
    }
})
//)

// export default queryClient;