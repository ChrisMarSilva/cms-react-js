//import axios from 'axios'
import api from "../api"

export default async function getUser(userId: string): Promise<User> {
    try {
        //const url = `https://jsonplaceholder.typicode.com/users/${userId}`

        //const res = await fetch(url) // response
        //const res = await axios.get<User>(url)
        const res = await api.get<User>(`users/${userId}`)

        //if (!res.ok) throw new Error('Failed to fetch user')

        return res.data
        // return res.json()
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch user')
    }
}