'use client'

import { Provider } from 'react-redux'
import { store } from '@/store'
//import { wrapper } from '@/store'

type ProvidersProps = {
    children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers;
//export default wrapper.withRedux(Providers);
