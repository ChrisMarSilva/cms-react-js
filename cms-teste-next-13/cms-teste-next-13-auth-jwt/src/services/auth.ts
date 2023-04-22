import { api } from './api';
//import { v4 as uuid } from 'uuid'

type SignInRequestData = {
    email: string;
    password: string;
}

// const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) { // : Promise<User>
    try {
        const res = await api.post('autoriza/login', data)

        // console.log(res.data)

        // return { "authenticated": true, "expiration": "2023-04-22T17:01:45.9775204Z", "message": "Token JWT OK", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXVWYWxvciI6Im9xdWUgdm9jZSBxdWlzZXIiLCJtZXVQZXQiOiJwaXBvY2EiLCJlbWFpbCI6InVzZXIzQGV4YW1wbGUuY29tIiwidW5pcXVlX25hbWUiOiJ1c2VyM0BleGFtcGxlLmNvbSIsImp0aSI6IjVhNGE1NmEyLTllNjktNDRmMy1hZjExLTZlZDg0ZTNkYmI4YyIsImV4cCI6MTY4MjE4MjkwNSwiaXNzIjoiQ2hyaXNNYXJTaWxfSXNzdWVyIiwiYXVkIjoiQ2hyaXNNYXJTaWxfQXVkaWVuY2UifQ.yvFHR14hnPPnQ0pSTqG9m9cDXIo1hdJyx4l6FbsqwKg" }
        // return { token: uuid(), user: { name: 'Chris MarSil', email: 'chris.marsil@gmail.com', avatar_url: 'https://github.com/ChrisMarSilva.png' } }

        return res.data

    } catch (error) {
        console.error(error)
        // throw new Error('Failed to fetch autoriza/login')
    }
}

export async function recoverUserInformation() {
    // await delay()
    return {
        user: {
            name: 'Chris MarSil',
            email: 'chris.marsil@gmail.com',
            avatar_url: 'https://github.com/ChrisMarSilva.png'
        }
    }
}