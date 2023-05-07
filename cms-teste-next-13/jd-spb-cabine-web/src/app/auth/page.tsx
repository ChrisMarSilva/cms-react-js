import { Metadata, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { parseCookies } from 'nookies'

import { AuthContext } from '../contexts/AuthContext'
import { CABINE_TOKEN } from './../utils/constants'
import img_logo_login from './../assets/img/logo-colorido-horizontal.png'
import img_atendimento from './../assets/icons/atendimento.svg'
//import styles_login from "./../styles/login.css"
//import styles_sheet from './../styles/style-sheet.css'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [CABINE_TOKEN]: token } = parseCookies(ctx)
  if (token) return { redirect: { destination: '/dashboard', permanent: false, } }
  return {
    props: {}
  }
}
export const metadata: Metadata = {
  title: '..:: Login - JDSPB Cabine Web ::..',
}

export default function AuthPage() {
  const { register, handleSubmit, reset } = useForm();
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: { usuario: string; senha: string; ispbif: string; }) {
    await signIn(data)
  }

  async function handleCancel(data: { usuario: string; senha: string; ispbif: string; }) {
    reset(
      formValues => ({
        ...formValues,
        usuario: '',
        senha: '',
        ispbif: '',
      })
    )
  }

  return (
    <>
      <h1>HomePage</h1>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <div>
          <div>
            <label htmlFor="usuario" >Usuário</label>
            <input {...register('usuario')} defaultValue="piloto" type="text" id="usuario" name="usuario" required />
          </div>
          <div>
            <label htmlFor="senha" >Senha</label>
            <input {...register('senha')} defaultValue="p" type="password" id="senha" name="senha" required />
          </div>
          <div>
            <label htmlFor="ispbif" >Instituição</label>
            <select {...register('ispbif')} defaultValue="04358798" id="ispbif" required >
              <option selected value=""></option>
              <option value="04358798">JD Consultores</option>
            </select>
          </div>
          <div>
            <button onClick={() => handleCancel} type="button">Cancelar</button>
            <button type="submit">Entrar</button>
          </div>
        </div>
      </form>

    </>
  )
}
