import axios from "axios"
import { api } from './api'

export const MonitorLogsService = {

    //getAll: async function (instituicao: string, data: string, horaInicio: string, horaFim: string, descricaoContem: string, descricaoNaoContem: string): Promise<LogsErrosResponse[]> {
    //getAll: async function (txtInstituicao: string, txtData: string, txtHoraInicio: string, txtHoraFim: string, txtDescricaoContem: string, txtDescricaoNaoContem: string): Promise<LogsErrosResponse[]> {
    //getAll: async function (formData: any): Promise<LogsErrosResponse[]> {
    getAll: async function (txtInstituicao: string, txtData: string, txtHoraInicio: string, txtHoraFim: string, txtDescricaoContem: string, txtDescricaoNaoContem: string): Promise<LogsErrosResponse[]> {
        try {

            //console.clear();
            //console.log(formData)
            //let { txtInstituicao, txtData, txtHoraInicio, txtHoraFim, txtDescricaoContem, txtDescricaoNaoContem } = formData;

            txtData = txtData.replaceAll("-", "");
            txtHoraInicio = txtHoraInicio + ":00";
            txtHoraFim = txtHoraFim + ":00";

            //console.log(`MonitorLogsService.getAll - instituicao: ${txtInstituicao} - data: ${txtData} - horaInicio: ${txtHoraInicio} - horaFim: ${txtHoraFim} - descricaoContem: ${txtDescricaoContem} - descricaoNaoContem: ${txtDescricaoNaoContem}`)

            const params = {
                instituicao: txtInstituicao,
                data: txtData,
                horaInicio: txtHoraInicio,
                horaFim: txtHoraFim,
                descricaoContem: txtDescricaoContem,
                descricaoNaoContem: txtDescricaoNaoContem,
                // nivel1: formData.txtNivel1, 
                // nivel2: formData.txtNivel2, 
                // nivel3: formData.txtNivel3, 
            }

            const res = await api.get<LogsErrosResponse[]>('logmonitorcliente', { params });

            //console.log(`MonitorLogsService.getAll - res.data: ${res.data}`)
            //console.log(res.data)

            return res.data
        } catch (err: unknown) {
            //console.error(`MonitorLogsService.getAll - error: ${err}`)
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

export default MonitorLogsService
