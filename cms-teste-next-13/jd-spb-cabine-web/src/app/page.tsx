"use client"

//import { useState } from 'react'
import { Metadata } from 'next'
import { useAuth } from "@/hooks/useAuth"

export const metadata: Metadata = {
  title: '..:: Home - JDSPB Cabine Web ::..',
}

//export const HomePage = () => {
export default function HomePage() {

  const {
    usuario, setUsuario,
    senha, setSenha, ispbif,
    setIspbif, lstif, setLstif,
    error, setError,
    handleSubmit, handleCancel, handleListaIf,
  } = useAuth()

  return (
    <>
      <h1>HomePage</h1>

      {/* {JSON.stringify(lstif, null, 2)} */}

      {error && <p><strong>Error:</strong> {error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="usuario" >Usuário</label>
            <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" id="usuario" name="usuario" autoComplete="off" required />
          </div>
          <div>
            <label htmlFor="senha" >Senha</label>
            <input onBlur={handleListaIf} value={senha} onChange={(e) => setSenha(e.target.value)} type="password" id="senha" name="senha" autoComplete="new-password" required />
          </div>
          <div>
            <label htmlFor="ispbif" >Instituição</label>
            <select defaultValue={ispbif} onChange={(e) => setIspbif(e.target.value)} id="ispbif" name="ispbif">
              <option value="" ></option>
              {lstif?.length > 0 && lstif?.map(item => (<option key={item.ispb} value={item.ispb}>{item.nome}</option>))}
            </select>
          </div>
          <div>
            <button type="submit">Entrar</button>
            <button onClick={handleCancel} type="button">Cancelar</button>
          </div>
        </div>
      </form>

    </>
  )
}
