'use client'

import { useState, } from 'react'
import axios from 'axios'
import error from 'next/error'

// import sha256 from 'crypto-js/sha256'
// import hmacSHA512 from 'crypto-js/hmac-sha512'
// import Base64 from 'crypto-js/enc-base64'

const api = axios.create({
  baseURL: 'https://api.foxbit.com.br/rest/v3/', // 'https://jsonplaceholder.typicode.com/',
  timeout: 1000 * 30,
  withCredentials: true,
  responseType: 'json',
  headers: {
    "Cache-Control": "no-cache",
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*', //  '*', // 'http://localhost:3000
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Auth-Token',
  }
})

api.interceptors.request.use(config => {
  console.log(config)
  return config
})

const Home = () => {
  const [data, setData] = useState(null)

  const handleClickTeste01 = async () => {
    try {
      console.clear()
      //console.log('handleClickTeste01')

      var CryptoJS = require("crypto-js")
      const apiSecret = '9cgBixe0YpEdKeN41hxPxHYo175nv7jeJ0Ww4NXY' // Chave de acesso // API Key
      const payload = { method: 'GET', url: '/rest/v3/me', query: '', body: {} }
      const timestamp = Date.now()
      const rawBody = JSON.stringify(payload.body)
      const prehash = `${timestamp}${payload.method}${payload.url}${payload.query}${rawBody}`
      const signature = CryptoJS.HmacSHA256(prehash, apiSecret).toString()

      api.defaults.headers['cache-control'] = 'no-cache'
      api.defaults.headers['Accept'] = 'application/json'
      api.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
      api.defaults.headers['Access-Control-Allow-Origin'] = '*'
      // api.defaults.headers['Authorization'] = `Bearer ${signature}` `Basic ${signature}` `token ${signature}`
      api.defaults.headers['X-FB-ACCESS-KEY'] = 'bJCHJTkw23TsNiqMxv3Qbj4fcbhYwIMkfN1v45dJ' //Chave secreta
      api.defaults.headers['X-FB-ACCESS-TIMESTAMP'] = timestamp
      api.defaults.headers['X-FB-ACCESS-SIGNATURE'] = signature
      //const headers = { Authorization: `Bearer ${signature}` }

      const response = await api.get('me') //const response = await api.get('https://api.foxbit.com.br/rest/v3/me') //const response = await api.get('me', { headers }) // 'todos/1' / 'currencies' / 'markets' // me
      console.log(response)

      setData(response.data)
    } catch (error: unknown) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        console.error(`ERRO-01: ${error.code} - ${error.message}`)
      } else {
        console.error(`ERRO-02: ${error}`)
      }
      // if (err instanceof AxiosError) { // if (error instanceof Error) error?.details?.forEach((item: any) => { console.error(`${item}`); })
    }
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClickTeste01}>Teste01</button>

      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default Home
