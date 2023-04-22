//import axios from 'axios'
import api from "../api"

export default async function getAllUsers(): Promise<User[]> {
    try {
        //const url = 'https://jsonplaceholder.typicode.com/users'

        //const res = await fetch(url) // response
        //const res = await axios.get<User[]>(url)
        const res = await api.get<User[]>('users')

        //if (!res.ok) throw new Error('Failed to fetch data')

        return res.data
        // return res.json()
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch data')
    }
}