import axios from "axios"
import { api } from './api'

export const IspbService = {

    _get: async (url: string, tipo: string): Promise<Ispb[]> => {
        try {
            // console.log(`IspbService.get - url: ${url} tipo: ${tipo}`)
            const params = { tipo: tipo }
            const res = await api.get<Ispb[]>(url, { params })

            //console.log(`IspbService.get - res.data: ${res.data}`)
            return res.data
        } catch (err: unknown) {
            //console.error(`IspbService.get - error: ${err}`)
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

    getAll: async (tipo: string): Promise<Ispb[]> => await IspbService._get('ispb', tipo),
    getIfExistAll: async (tipo: string): Promise<Ispb[]> => await IspbService._get('ispb/cadastrado', tipo),
    getIfNotExistAll: async (tipo: string): Promise<Ispb[]> => await IspbService._get('ispb/pendente', tipo),

}

export default IspbService
