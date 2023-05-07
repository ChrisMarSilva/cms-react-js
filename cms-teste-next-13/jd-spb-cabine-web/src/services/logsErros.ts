import { api } from "./api"

///export default async function getLogsErrosRequest(data: LogsErrosRequest): Promise<LogsErrosResponse[]> {
export default async function getLogsErrosRequest(data: string, horaInicio: string, horaFim: string, descricaoContem: string, descricaoNaoContem: string): Promise<LogsErrosResponse[]> {
    try {

        data = data.replaceAll("-", "");
        horaInicio = horaInicio + ":00";
        horaFim = horaFim + ":00";

        //console.clear();
        //console.log(`getLogsErrosRequest - data: ${data} - horaInicio: ${horaInicio} horaFim: ${horaFim} descricaoContem: ${descricaoContem} - descricaoNaoContem: ${descricaoNaoContem}`)

        const url = 'logmonitor'
        const params = { data: data, horaInicio: horaInicio, horaFim: horaFim, descricaoContem: descricaoContem, descricaoNaoContem: descricaoNaoContem }
        const res = await api.get<LogsErrosResponse[]>(url, { params })

        //console.log(`getLogsErrosRequest - res.data: ${res.data}`)
        //console.log(`getLogsErrosRequest - res.data: ${res.data[0].erro}`)

        return res.data
    } catch (error) {
        if (error.response) {
            error.response.data.Erros.forEach(item => { console.error(`Campo: ${item.Campo} - Descrição: ${item.Descricoes[0]}`); })
            return error.response;
        } else if (error.request) {
            console.error(`Erro: ${error.request}`)
            return error.request;
        } else {
            console.error(`Erro:${error.message}`)
            return error.message;
        }
    }
}