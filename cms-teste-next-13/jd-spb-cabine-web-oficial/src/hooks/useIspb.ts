import { useEffect, } from 'react'
import { useQuery, useMutation, } from '@tanstack/react-query'

import { queryClient, } from "@/services/queryClient"
import IspbService from "@/services/ispb"

export function useIspb() {

    const { data: lstIspb } = // Lista IF Geral
        useQuery<Ispb[] | null>({
            queryKey: ['useIspb'],
            queryFn: async () => await IspbService.getAll('IF'),
            refetchOnMount: false,
            retryOnMount: false,
            // enabled: false,
        })

    const { data: lstIspbIfExist } =  // Lista IF Cadastrada
        useQuery<Ispb[] | null>({
            queryKey: ['useIspbIfExist'],
            queryFn: async () => await IspbService.getIfExistAll('IF'),
            refetchOnMount: false,
            retryOnMount: false,
            // enabled: false,
        })

    const { data: lstIspbIfNotExist } = // Lista NAO IF Cadastrada
        useQuery<Ispb[] | null>({
            queryKey: ['useIspbIfNotExist'],
            queryFn: async () => await IspbService.getIfNotExistAll('IF'),
            refetchOnMount: false,
            retryOnMount: false,
            // enabled: false,
        })

    useEffect(() => {
        // console.log('useIspb.Entrar')
        handleLimpar()

        return () => {
            // console.log('useIspb.Sair')
            handleLimpar()
        }
    }, [])

    const handleLimpar = async () => {
        queryClient.removeQueries({ queryKey: ['useIspb'] }); // Lista IF Geral
        queryClient.removeQueries({ queryKey: ['useIspbIfExist'] });// Lista IF Cadastrada
        queryClient.removeQueries({ queryKey: ['useIspbIfNotExist'] }); // Lista NAO IF Cadastrada
    }
    // Lista IF Geral

    const mutationListarIF = useMutation({
        mutationFn: async () => await IspbService.getAll('IF'),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['useIspb'] }),
    })
    const mutationListarCamara = useMutation({
        mutationFn: async () => await IspbService.getAll('STR'),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['useIspb'] }),
    })

    // Lista IF Cadastrada

    const mutationListarIFExist = useMutation({
        mutationFn: async () => await IspbService.getIfExistAll('IF'),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['useIspbIfExist'] }),
    })

    const mutationListarCamaraExist = useMutation({
        mutationFn: async () => await IspbService.getIfExistAll('STR'),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['useIspbIfExist'] }),
    })

    // Lista NAO IF Cadastrada

    const mutationListarIFNotExist = useMutation({
        mutationFn: async () => await IspbService.getIfNotExistAll('IF'),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['useIspbIfNotExist'] }),
    })

    const mutationListarCamaraNotExist = useMutation({
        mutationFn: async () => await IspbService.getIfNotExistAll('STR'),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['useIspbIfNotExist'] }),
    })

    // const handleListar = async (tipo: string) => {
    //     //try {
    //     //setError('')
    //     setLstIspb([])

    //     const lista = await IspbService.getAll(tipo)
    //     setLstIspb(lista)

    //     if (lista?.length > 0) {
    //         setIspb(lista[0].ispb)
    //     }

    //     // } catch (err) {
    //     //     console.error(err)
    //     //     let errorMessage = 'Falha geral'
    //     //     if (err instanceof Error) errorMessage = err.message
    //     //     if (err) setError(errorMessage)
    //     // }
    // }

    return {
        lstIspb, mutationListarIF, mutationListarCamara,
        lstIspbIfExist, mutationListarIFExist, mutationListarCamaraExist,
        lstIspbIfNotExist, mutationListarIFNotExist, mutationListarCamaraNotExist,
    }
}