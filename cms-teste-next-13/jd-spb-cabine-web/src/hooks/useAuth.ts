import { useState } from "react"
import AuthService from "@/services/auth"

//export const useAuth = () => ({
export function useAuth() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [ispbif, setIspbif] = useState('')
    const [lstif, setLstif] = useState<IspbIfItem[]>([])
    const [error, setError] = useState('')

    //   handleSubmit: async (e: any) => {
    async function handleSubmit(e: any) {
        e.preventDefault()
        console.log(`handleSubmit - usuario: ${usuario} - senha: ${senha} - ispbif: ${ispbif}`)
    }

    async function handleCancel() {
        setUsuario('')
        setSenha('')
        setIspbif('')
        setError('')
    }

    async function handleListaIf() {
        try {
            setError('')
            setLstif([])
            const { lista_ispb } = await AuthService.getIfs({ usuario, senha })
            setLstif(lista_ispb)
        } catch (err) {
            let errorMessage = 'Falha geral'
            if (err instanceof Error) errorMessage = err.message
            if (err) setError(errorMessage)
        }
    }

    return {
        usuario, setUsuario,
        senha, setSenha,
        ispbif, setIspbif,
        lstif, setLstif,
        error, setError,
        handleSubmit, handleCancel, handleListaIf,
    }
}