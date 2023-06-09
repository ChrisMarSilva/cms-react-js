import { createContext } from "react"

const AppContext = createContext({}); // createContext({ users: [] });

export default AppContext;



// import { ReactNode, createContext, useEffect, useState } from "react"
// // import { setCookie, parseCookies } from 'nookies'
// //import Router from 'next/router'
// import { User } from '@prisma/client';

// type AppContextType = {
//     user: User | null;
//     //  isAuthenticated: boolean;
//     //signIn: (data: SignInData) => Promise<void>
// }

// export const AppContext = createContext({} as AppContextType)

// type AppContextProps = {
//     children: ReactNode
// }

// export function AppProvider({ children }: AppContextProps) {
//     const [user, setUser] = useState<User | null>(null)
//     //const isAuthenticated = !!user;

//     // const parseJwt = (token: string) => { // function parseJwt ( token: string ) {
//     //     try {
//     //         var base64Url = token.split('.')[1];
//     //         var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     //         var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
//     //             return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     //         }).join(''));
//     //         return JSON.parse(jsonPayload);
//     //     } catch (e) {
//     //         return null;
//     //     }
//     // }

//     useEffect(() => {
//         // const { [CABINE_TOKEN]: token } = parseCookies()
//         // // console.log(`useEffect - CABINE_TOKEN: ${CABINE_TOKEN} - token: ${token}`)
//         // // const token = req.cookies.get(CABINE_TOKEN)?.value
//         // // const cookies = parseCookies()
//         // // console.log({ cookies })

//         // if (token) {
//         //     AuthService.recoverUserInformation(parseJwt(token)).then(res => {
//         //         setUser(res.user)
//         //         Router.push('/')
//         //     })
//         // }
//     }, [])

//     async function signIn() { // { usuario, senha, ispbif }: SignInData

//         // // console.log(`signIn - usuario: ${usuario} - senha: ${senha} - ispbif: ${ispbif}`)
//         // const { access_token, expires_in } = await AuthService.signInRequest({ usuario, senha, ispbif })
//         // // console.log(`signIn - expiration: ${expires_in} - date: ${new Date(expires_in*1000).toLocaleString("pt-BR")} - token: ${access_token}`)

//         // setCookie(undefined, CABINE_TOKEN, access_token, {
//         //     // maxAge: 60 * 60 * 1, /* 1 hour */
//         //     // path: '/',
//         //     expires: new Date(expires_in * 1000)
//         // })

//         // api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

//         // const { user } = await AuthService.recoverUserInformation(parseJwt(access_token))
//         // setUser(user)

//         // Router.push('/')
//     }

//     // , isAuthenticated, signIn
    
//     return (
//         <AppContext.Provider value={{ user }}>
//             {children}
//         </AppContext.Provider>
//     )
//     }

