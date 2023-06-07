import axios from "axios"
import { api } from './api'

export const AuthService = {

    getIfs: async function (params: ListaIfInData): Promise<IspbIf> {
        try {
            //console.log(`AuthService.getIfs - data: ${data}`)
            const res = await api.get<IspbIf>('auth/listaif', {params})
            
            //console.log(`AuthService.getIfs - res.data: ${res.data}`)
            return res.data
        } catch (err: unknown) {
            //console.error(`AuthService.getIfs - error: ${err}`)
            let errorMessage = 'Falha geral na requisição'
            if (axios.isAxiosError(err)) {
                if (!err?.response) { errorMessage = 'Nenhuma resposta do servidor' }
                else if (err.response) { errorMessage = `${err.response.data.Descricao}` } // ${err.response.data.Codigo} - 
                else if (err.request) { errorMessage = `${err.request}` }
                else if (err instanceof Error) { errorMessage = err.message }
            } else {
                if (err instanceof Error) { errorMessage = err.message }
            }
            throw new Error(errorMessage)
        }
    },

    signInRequest: async function (data: SignInData): Promise<SignInDataResponse> {
        try {
            //console.log(`AuthService.signInRequest - data: ${data}`)
            const res = await api.post('auth/login', new URLSearchParams(data))

            //console.log(`AuthService.signInRequest - res.data: ${res.data}`)
            return res.data
        } catch (err: unknown) {
            console.error(`AuthService.signInRequest - error: ${err}`)
            let errorMessage = 'Falha geral na requisição'
            if (axios.isAxiosError(err)) {
                if (!err?.response) { errorMessage = 'Nenhuma resposta do servidor' }
                else if (err.response) { errorMessage = `${err.response.data.Descricao}` } // ${err.response.data.Codigo} - 
                else if (err.request) { errorMessage = `${err.request}` }
                else if (err instanceof Error) { errorMessage = err.message }
            } else {
                if (err instanceof Error) { errorMessage = err.message }
            }
            throw new Error(errorMessage)
        }
    },

    recoverUserInformation: async function (data: any): Promise<any> {
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
    },

}

export default AuthService
