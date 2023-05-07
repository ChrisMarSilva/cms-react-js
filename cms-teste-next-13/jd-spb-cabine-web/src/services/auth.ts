import axios from "axios"
import { api } from './api'

export const AuthService = {

    getIfs: async function (data: ListaIfInData): Promise<IspbIf> {
        try {
            const res = await api.get<IspbIf>('listaif')
            return res.data
        } catch (err: unknown) {
            let errorMessage = 'Falha geral na requisição'
            if (axios.isAxiosError(err)) {
                if (!err?.response) { errorMessage = 'Nenhuma resposta do servidor' }
                else if (err.response) { errorMessage = `${err.response.status} - ${err.response.statusText}` }
                //error.response.data.Erros.forEach(item => { console.error(`Campo: ${item.Campo} - Descrição: ${item.Descricoes[0]}`); })
                else if (err.request) { errorMessage = `${err.request}` }
                else if (err instanceof Error) { errorMessage = err.message }
            } else {
                if (err instanceof Error) { errorMessage = err.message }
            }
            throw new Error(errorMessage)
        }
    },

}

export default AuthService

// export async function getListaIfInRequest(data: ListaIfInData) { // : Promise<IspbIf>
//     try {
//         const url = 'listaif' // 'auth/listaif'

//         //console.log(`getListaIfInRequest - data: ${data}`)
//         const res = await api.get(url)
//         //console.log(`getListaIfInRequest - res.data: ${res.data}`)

//         return res.data
//     } catch (error) {
//         console.error(`getListaIfInRequest - error: ${error}`)
//         //throw new Error('Failed to fetch auth/login')
//     }
// }

export async function signInRequest(data: SignInData) { // : Promise<User>
    try {
        const url = 'auth/login'
        //console.log(`signInRequest - data: ${data}`)

        //const res = await api.post(url, data)
        //const res = await api.post(url, new URLSearchParams({ usuario: 'piloto', senha: 'p', ispbif: '04358798' }))
        const res = await api.post(url, new URLSearchParams(data))

        //console.log(`signInRequest - res.data: ${res.data}`)

        return res.data
    } catch (error) {
        console.error(`signInRequest - error: ${error}`)
        //throw new Error('Failed to fetch auth/login')
    }
}

export async function recoverUserInformation(data: any) { //  : Promise<User>
    return {
        user: {
            //unique_name: data['unique_name'],
            //jti: data['jti'],
            codigo: data['codigo'],
            nome: data['nome'],
            grau: data['grau'],
            areaneg: data['areaneg'],
            classe: data['classe'],
            direito: data['direito'],
            dataalteracaosenha: data['dataalteracaosenha'],
            ispbif: data['ispbif'],
            cnpjif: data['Cnpjif'], // cnpjif
            nomeif: data['nomeif'],
            razaosocialif: data['razaosocialif'],
            logomarcaif: data['logomarcaif'],
            adminweb: data['adminweb'],
            //ipremoto: data['ipremoto'],
        }
    }
}