// 'use client'

// import { ReactNode, useEffect, useState, useContext, createContext, } from "react"
// import { setCookie, parseCookies } from 'nookies'
// import Router from 'next/router'

// import { recoverUserInformation, signInRequest } from "../services/auth"
// import { api } from "../services/api"
// import { CABINE_TOKEN } from './../utils/constants'

// // contexts/Auth/AuthContext.tsx

// type AuthContextType = { // AuthContextProps
//     isAuthenticated: boolean;
//     user: User | null;
//     signIn: (data: SignInData) => Promise<void>;
//     signOut: () => void;
// }

// export const AuthContext = createContext({} as AuthContextType)
// export const AuthContext = createContext<AuthContextType>(null!)

// // contexts/Auth/AuthProvider.tsx

// type Props = {
//     children: ReactNode
// }

// export function AuthProvider({ children }: Props) {
//     const [user, setUser] = useState<User | null>(null)
//     const isAuthenticated = !!user;

//     const parseJwt = (token: string) => { // function parseJwt ( token: string ) {
//         try {
//             var base64Url = token.split('.')[1];
//             var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//             var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
//                 return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//             }).join(''));
//             return JSON.parse(jsonPayload);
//         } catch (e) {
//             return null;
//         }
//     }

//     useEffect(() => {
//         const { [CABINE_TOKEN]: token } = parseCookies()
//         // console.log(`useEffect - CABINE_TOKEN: ${CABINE_TOKEN} - token: ${token}`)
//         // const token = req.cookies.get(CABINE_TOKEN)?.value
//         // const cookies = parseCookies()
//         // console.log({ cookies })

//         if (token) {
//             recoverUserInformation(parseJwt(token)).then(res => {
//                 setUser(res.user)
//                 Router.push('/dashboard')
//             })
//         }
//     }, [])

//     const signIn = async ({ usuario, senha, ispbif }: SignInData) => {}
//     async function signIn({ usuario, senha, ispbif }: SignInData) {

//         // console.log(`signIn - usuario: ${usuario} - senha: ${senha} - ispbif: ${ispbif}`)
//         const { access_token, expires_in } = await signInRequest({ usuario, senha, ispbif })
//         // console.log(`signIn - expiration: ${expires_in} - date: ${new Date(expires_in*1000).toLocaleString("pt-BR")} - token: ${access_token}`)

//         setCookie(undefined, CABINE_TOKEN, access_token, {
//             // maxAge: 60 * 60 * 1, /* 1 hour */
//             // path: '/',
//             expires: new Date(expires_in * 1000)
//         })

//         api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

//         const { user } = await recoverUserInformation(parseJwt(access_token))
//         setUser(user)

//         Router.push('/dashboard')
//     }

//     const signOut = async () => {}

//     return (
//         <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
//             <>{children}</>
//         </AuthContext.Provider>
//     )
// }

// export const useAuthContext = () => {
//     const context = useContext(AuthContext)
//     return context;
// }

// const auth = useAuthContext();
// const auth = useContext(AuthContext);
//   await auth.signOut();
// Olá {auth.user?.name}, tudo bem?