'use client'

import { useState, } from 'react'
import axios from 'axios'
import error from 'next/error'
import { v4 as uuidv4 } from 'uuid'
// import sha256 from 'crypto-js/sha256'
// import hmacSHA512 from 'crypto-js/hmac-sha512'
// import Base64 from 'crypto-js/enc-base64'

const api = axios.create({
  baseURL: 'https://api.foxbit.com.br/rest/v3/',
  timeout: 1000 * 30,
  // withCredentials: true,
  // responseType: 'json',
  // headers: {
  //   "Cache-Control": "no-cache",
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json',
  //   'Access-Control-Allow-Origin': '*', //  '*', // 'http://localhost:3000
  //   // 'Access-Control-Allow-Credentials': 'true',
  //   // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  //   // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Auth-Token',
  // }
})

api.interceptors.request.use(config => {
  console.log(config)
  return config
})

const Home = () => {
  const [data, setData] = useState(null)

  const handleClickTeste01 = async () => {
    try {
      setData(null)
      console.clear()
      // console.log('handleClickTeste01')

      // ID do usuário                 : 258442
      // Chave de acesso / Access key  : CpQ15WTQUqyjqVNhj7Kdw5qTQOuWH5godv148hmH
      // Chave secreta  / Secret key   : Sc2vx7POxqGPlJO6aA7Dg4Yl4TlyBMyDPxOJA6kn

      var CryptoJS = require("crypto-js")

      const apiSecret = 'CpQ15WTQUqyjqVNhj7Kdw5qTQOuWH5godv148hmH'; // Chave secreta  / Secret key
      const payload = { method: 'GET', url: 'trades', query: 'market_symbol=btcbrl' };
      const timestamp = Date.now();
      console.error(`timestamp: ${timestamp}`)


      const prehash = `${timestamp}${payload.method}${payload.url}${payload.query}`;
      const signature = CryptoJS.HmacSHA256(prehash, apiSecret).toString();

      // api.defaults.headers['cache-control'] = 'no-cache'
      // api.defaults.headers['Accept'] = 'application/json'
      // api.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
      api.defaults.headers['X-Idempotent'] = uuidv4()
      api.defaults.headers['X-FB-ACCESS-KEY'] = 'CpQ15WTQUqyjqVNhj7Kdw5qTQOuWH5godv148hmH' // Chave de acesso / Access key
      api.defaults.headers['X-FB-ACCESS-TIMESTAMP'] = timestamp
      api.defaults.headers['X-FB-ACCESS-SIGNATURE'] = signature

      const response = await api.get('moedas')

      //console.log(response)
      setData(response.data)
    } catch (error: unknown) {
      // console.log(error)
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
