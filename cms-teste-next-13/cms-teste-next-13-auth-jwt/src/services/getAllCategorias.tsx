import { api } from "./api"

//export default async function getAllCategorias() { 
export default async function getAllCategorias(): Promise<Categoria[]> {
    try {
        const res = await api.get<Categoria[]>('categorias')
        return res.data
    } catch (error) {
        console.error(error)
        // throw new Error('Failed to fetch data categorias')
    }
}