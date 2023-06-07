import axios from "axios"
import { api } from './api'

export const BdClienteService = {

    getAll: async function (ispb: string): Promise<BdClienteResponse[]> {
        try {
            // console.clear();
            // console.log(`BdClienteService.getAll - ispb: ${ispb}`)
            const params = { ispb: ispb }
            const res = await api.get<BdClienteResponse[]>('bdcliente', { params })

            //console.log(`BdClienteService.getAll - res.data: ${res.data}`)
            return res.data
        } catch (err: unknown) {
            //console.error(`BdClienteService.getAll - error: ${err}`)
            console.warn(err)
            let errorMessage = 'Falha geral na requisição'
            if (axios.isAxiosError(err)) {
                if (!err?.response) { errorMessage = 'Nenhuma resposta do servidor' }
                else if (err.response) {
                    errorMessage = `Requisição inválida` // `${err.response.data.Descricao}` // ${err.response.data.Codigo} -  
                    err.response.data.Erros.forEach((item: any) => { errorMessage += ` - ${item.Descricoes[0]}` }) //  - Campo: ${item.Campo} - Descrição: 
                }
                else if (err.request) { errorMessage = `${err.request}` }
                else if (err instanceof Error) { errorMessage = err.message }
            } else {
                if (err instanceof Error) { errorMessage = err.message }
            }
            throw new Error(errorMessage)
        }
    },

    get: async function (id: number): Promise<BdClienteResponse> {
        try {
            // console.clear();
            //console.log(`BdClienteService.get - ispbCliente: ${ispbCliente} conTipoSgdb: ${conTipoSgdb} conServidor: ${conServidor} conBancoDados: ${conBancoDados} conUsuario: ${conUsuario} conSenha: ${conSenha}`)

            const res = await api.get<BdClienteResponse>(`bdcliente/${id}`)

            //console.log(`BdClienteService.get - res.data: ${res.data}`)
            console.log(res.data)
            return res.data
        } catch (err: unknown) {
            //console.error(`BdClienteService.get - error: ${err}`)
            console.warn(err)
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

    post: async function (ispbCliente: string, conTipoSgdb: string, conServidor: string, conBancoDados: string, conUsuario: string, conSenha: string): Promise<BdClienteResponse> {
        try {
            // console.clear();
            //console.log(`BdClienteService.post - ispbCliente: ${ispbCliente} conTipoSgdb: ${conTipoSgdb} conServidor: ${conServidor} conBancoDados: ${conBancoDados} conUsuario: ${conUsuario} conSenha: ${conSenha}`)

            const params = { ispbCliente: ispbCliente, conTipoSgdb: conTipoSgdb, conServidor: conServidor, conBancoDados: conBancoDados, conUsuario: conUsuario, conSenha: conSenha, }
            const res = await api.post<BdClienteResponse>('bdcliente', params)

            //console.log(`BdClienteService.post - res.data: ${res.data}`)
            return res.data
        } catch (err: unknown) {
            //console.error(`BdClienteService.post - error: ${err}`)
            console.warn(err)
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

    put: async function (id: number, ispbCliente: string, conTipoSgdb: string, conServidor: string, conBancoDados: string, conUsuario: string, conSenha: string, stBd: string): Promise<BdClienteResponse> {
        try {
            // console.clear();
            //console.log(`BdClienteService.put - ispbCliente: ${ispbCliente} conTipoSgdb: ${conTipoSgdb} conServidor: ${conServidor} conBancoDados: ${conBancoDados} conUsuario: ${conUsuario} conSenha: ${conSenha} stBd: ${stBd}`)

            const params = { ispbCliente: ispbCliente, conTipoSgdb: conTipoSgdb, conServidor: conServidor, conBancoDados: conBancoDados, conUsuario: conUsuario, conSenha: conSenha, stBd: stBd }
            const res = await api.put<BdClienteResponse>(`bdcliente/${id}`, params)

            //console.log(`BdClienteService.put - res.data: ${res.data}`)
            return res.data
        } catch (err: unknown) {
            //console.error(`BdClienteService.put - error: ${err}`)
            console.warn(err)
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

    del: async function (id: number): Promise<void> {
        try {
            // console.clear();
            //console.log(`BdClienteService.delete - ispbCliente: ${ispbCliente} conTipoSgdb: ${conTipoSgdb} conServidor: ${conServidor} conBancoDados: ${conBancoDados} conUsuario: ${conUsuario} conSenha: ${conSenha}`)

            const res = await api.delete(`bdcliente/${id}`)

            //console.log(`BdClienteService.delete - res.data: ${res.data}`)
        } catch (err: unknown) {
            //console.error(`BdClienteService.delete - error: ${err}`)
            console.warn(err)
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

}

export default BdClienteService
