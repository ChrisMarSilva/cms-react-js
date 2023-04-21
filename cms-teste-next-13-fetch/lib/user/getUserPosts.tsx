//import axios from 'axios'
import api from "../api"

export default async function getUserPosts(userId: string): Promise<Post[]> {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

        //const res = await fetch(url) // response
        //onst res = await axios.get<Post[]>(url)
        const res = await api.get<Post[]>(`posts?userId=${userId}`)

        //if (!res.ok) throw new Error('Failed to fetch posts')

        return res.data
        // return res.json()
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch posts')
    }
}