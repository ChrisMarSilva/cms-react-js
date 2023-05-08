import { ReactNode, createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

type AuthContextType = {
    isAuthenticated: boolean;
    user: User | null;
    signIn: (data: SignInData) => Promise<void>
}

type Props = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'cms.teste.next.13.auth.jwt.token': token } = parseCookies()
        if (token)
            recoverUserInformation(token).then(res => {
                setUser(res.user)
                Router.push('/dashboard')
            })
    }, [])

    async function signIn({ email, password }: SignInData) {
        const { token, expiration } = await signInRequest({ email, password })

        setCookie(undefined, 'cms.teste.next.13.auth.jwt.token', token, {
            maxAge: 60 * 60 * 1, /* 1 hour */
            // expires: expiration
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        const { user } = await recoverUserInformation()

        setUser(user)
        Router.push('/dashboard')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}