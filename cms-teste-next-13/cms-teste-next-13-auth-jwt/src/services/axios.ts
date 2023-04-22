import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
    const { 'cms.teste.next.13.auth.jwt.token': token } = parseCookies(ctx)

    const api = axios.create({
        baseURL: 'https://localhost:7176/api/v1/'
    })

    api.interceptors.request.use(config => {
        console.log(config);
        return config;
    })

    if (token)
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

    return api;
}