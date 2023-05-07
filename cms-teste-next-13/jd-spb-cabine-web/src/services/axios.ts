import axios from "axios"
import { parseCookies } from "nookies"
import { CABINE_TOKEN } from './../utils/constants'

// const { API_SERVER_URL } = process.env;

export function getAPIClient(ctx?: any) {
    const api = axios.create({
        //  baseURL: 'http://localhost:6009/api/v1/jd/spb/', // API_SERVER_URL
        baseURL: 'http://localhost:3000/',
        //withCredentials: true,
        responseType: 'json',
        timeout: 1000 * 30,
    })

    api.interceptors.request.use(config => {
        console.log(config)
        return config
    })

    const { [CABINE_TOKEN]: token } = parseCookies(ctx)
    //console.log(`getAPIClient - token: ${token}`)

    api.defaults.headers['Accept'] = 'application/json'
    api.defaults.headers['cache-control'] = 'no-cache'
    api.defaults.headers['Access-Control-Allow-Origin'] = '*'

    if (token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api
}