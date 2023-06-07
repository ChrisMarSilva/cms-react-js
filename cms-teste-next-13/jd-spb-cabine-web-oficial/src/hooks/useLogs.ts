import { useState, useEffect } from 'react'
import { useQuery, } from '@tanstack/react-query'
import moment from 'moment'

import { queryClient, } from "@/services/queryClient"
import LogsService from "@/services/logsErros"

export function useLogs() {

    const [formFiltro, setFormFiltro] = useState({
        txtData: '',
        txtHoraInicio: '',
        txtHoraFim: '',
        txtDescricaoContem: '',
        txtDescricaoNaoContem: '',
    });

    const query = useQuery<LogsErrosResponse[] | null>({
        queryKey: ['LogsPage'],
        queryFn: async () => await LogsService.getAll(formFiltro.txtData, formFiltro.txtHoraInicio, formFiltro.txtHoraFim, formFiltro.txtDescricaoContem, formFiltro.txtDescricaoNaoContem),
        refetchOnMount: false,
        retryOnMount: false,
        // enabled: false,
    })

    useEffect(() => {
        // console.log('useLogs.Entrar')
        handleLimpar()

        return () => {
            // console.log('useLogs.Sair')
            handleLimpar()
        }
    }, [])

    const handleLimpar = async () => {
        setFormFiltro({
            txtData: moment().format("YYYY-MM-DD"),
            txtHoraInicio: "06:00", // moment().subtract(1, 'hour').format("HH:mm")
            txtHoraFim: moment().format("HH:mm"),
            txtDescricaoContem: '',
            txtDescricaoNaoContem: '',
        })
        await queryClient.removeQueries({ queryKey: ['LogsPage'] });
        //await queryClient.resetQueries({ queryKey: ['LogsPage'] });
    }

    const handleInput = async (e: any) => {
        const fieldName = e.currentTarget.name;  // target // currentTarget
        const fieldValue = e.currentTarget.value;
        // console.log(`${fieldName}: ${fieldValue}`);
        setFormFiltro((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await queryClient.removeQueries({ queryKey: ['LogsPage'] });
        //await queryClient.resetQueries({ queryKey: ['LogsPage'] });
        if (Object.keys(formFiltro).length == 0) return console.log("Sem dados para Filtrar");
        query.refetch();
    }

    return {
        formFiltro, setFormFiltro, query,
        handleLimpar, handleInput, handleSubmit,
    }
}