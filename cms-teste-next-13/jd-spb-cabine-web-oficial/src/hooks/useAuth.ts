import { useState } from "react"
import { useContext } from 'react'
import AuthService from "@/services/auth"
import { AuthContext } from '../contexts/AuthContext'

export function useAuth() { // export const useAuth = () => ({
    const { signIn } = useContext(AuthContext)
    const [usuario, setUsuario] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [ispbif, setIspbif] = useState<string>('')
    const [lstif, setLstif] = useState<IspbIfItem[] | null>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    //const [isError, setIsError] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleCancel = async () => {
        setUsuario('')
        setSenha('')
        setIspbif('')
        setIsLoading(false)
        setError('')
    }

    const handleListaIf = async () => {
        try {
            setIsLoading(false)
            setError('')
            setLstif([])
            if (usuario.trim() !== "" && senha.trim() !== "") {
                setIsLoading(true)
                const { lista_ispb } = await AuthService.getIfs({ usuario, senha })
                setIsLoading(false)
                setLstif(lista_ispb)
                if (lista_ispb?.length > 0) setIspbif(lista_ispb[0].ispb)
            }
        } catch (err) {
            setIsLoading(false)
            console.error(err)
            let errorMessage = 'Falha geral'
            if (err instanceof Error) errorMessage = err.message
            if (err) setError(errorMessage)
        }
    }

    const handleSubmit = async (e: any) => {
        try {
            e.preventDefault()
            setError('')
            setIsLoading(false)

            if (usuario.trim() == "") {
                setError('Usuário está vazio!')
                return
            }
            if (senha.trim() == "") {
                setError('Senha está vazia!')
                return
            }
            if (ispbif.trim() == "") {
                setError('Instituição está vazia!')
                return
            }

            //console.log(`handleSubmit - usuario: ${usuario} - senha: ${senha} - ispbif: ${ispbif}`)
            setIsLoading(true)
            await signIn({ usuario, senha, ispbif })
            setIsLoading(false)

        } catch (err) {
            setIsLoading(false)
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
        isLoading, setIsLoading,
        error, setError,
        handleListaIf, handleSubmit, handleCancel,
    }
}