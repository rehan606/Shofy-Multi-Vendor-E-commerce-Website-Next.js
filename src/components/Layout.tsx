"use client"

import { store } from '@/redux/store'
import { Provider } from 'react-redux'

const Layout = ({ children }: {children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            { children }
        </Provider>
    )
}

export default Layout
