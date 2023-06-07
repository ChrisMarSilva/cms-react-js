import { useState, useEffect, } from 'react';
import { useQuery, } from '@tanstack/react-query';
import moment from 'moment';

import { queryClient, } from "@/services/queryClient";
import MonitorLogsService from "@/services/monitorLogs";

export function useMonitorConectividades() {

    const [formFiltro, setFormFiltro] = useState({
        txtInstituicao: '',
        txtData: '',
        txtHoraInicio: '',
        txtHoraFim: '',
        txtDescricaoContem: '',
        txtDescricaoNaoContem: '',
        // txtNivel1: '',
        // txtNivel2: '',
        // txtNivel3: '',
    });

    const query = useQuery<LogsErrosResponse[] | null>({
        queryKey: ['MonitorLogs'],
        queryFn: async () => await MonitorLogsService.getAll(formFiltro.txtInstituicao, formFiltro.txtData, formFiltro.txtHoraInicio, formFiltro.txtHoraFim, formFiltro.txtDescricaoContem, formFiltro.txtDescricaoNaoContem),
        refetchOnMount: false,
        retryOnMount: false,
        enabled: false, // formFiltro && Object.keys(formFiltro).length > 0
    })

    useEffect(() => {
        //console.log('useMonitorLogs.Entrar')
        handleLimpar();

        return () => {
            //console.log('useMonitorLogs.Sair')
            handleLimpar()
        }
    }, [])

    const handleLimpar = async () => {
        setFormFiltro({
            txtInstituicao: '',
            txtData: moment().format("YYYY-MM-DD"),
            txtHoraInicio: "06:00", // moment().subtract(1, 'hour').format("HH:mm")
            txtHoraFim: moment().format("HH:mm"),
            txtDescricaoContem: '',
            txtDescricaoNaoContem: '',
            // txtNivel1: '',
            // txtNivel2: '',
            // txtNivel3: '',
        })
        await queryClient.removeQueries({ queryKey: ['MonitorLogs'] });
        //await queryClient.resetQueries({ queryKey: ['MonitorLogs'] });
    }

    const handleInput = async (e: any) => {
        const fieldName = e.currentTarget.name;  // target // currentTarget
        const fieldValue = e.currentTarget.value;
        // console.log(`${fieldName}: ${fieldValue}`);
        setFormFiltro((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await queryClient.removeQueries({ queryKey: ['MonitorLogs'] });
        //await queryClient.resetQueries({ queryKey: ['MonitorLogs'] });
        if (Object.keys(formFiltro).length == 0) return console.log("Sem dados para Filtrar");
        query.refetch();
    }

    return {
        formFiltro, setFormFiltro, query,
        handleLimpar, handleInput, handleSubmit,
    }
}