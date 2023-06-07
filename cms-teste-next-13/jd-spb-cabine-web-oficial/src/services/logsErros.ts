import axios from "axios"
import { api } from './api'

export const LogsService = {

    getAll: async function (data: string, horaInicio: string, horaFim: string, descricaoContem: string, descricaoNaoContem: string): Promise<LogsErrosResponse[]> {
        try {

            data = data.replaceAll("-", "");
            horaInicio = horaInicio + ":00";
            horaFim = horaFim + ":00";

            //console.clear();
            // console.log(`LogsService.getAll - data: ${data} - horaInicio: ${horaInicio} - horaFim: ${horaFim} - descricaoContem: ${descricaoContem} - descricaoNaoContem: ${descricaoNaoContem}`)

            const params = { data: data, horaInicio: horaInicio, horaFim: horaFim, descricaoContem: descricaoContem, descricaoNaoContem: descricaoNaoContem }
            const res = await api.get<LogsErrosResponse[]>('logmonitor', { params })

            //console.log(`LogsService.getAll - res.data: ${res.data}`)
            //console.log(res.data)

            return res.data
        } catch (err: unknown) {
            //console.error(`getAll - error: ${err}`)
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
}

export default LogsService
