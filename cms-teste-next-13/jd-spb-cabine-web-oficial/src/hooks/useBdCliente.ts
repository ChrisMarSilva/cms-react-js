import { useState, useEffect, } from 'react'
import { useQuery, } from '@tanstack/react-query';
//import { useMutation, } from '@tanstack/react-query';

import { queryClient, } from "@/services/queryClient";
import BdClienteService from "@/services/bdCliente";

export function useBdCliente() {

    const [showModalCad, setShowModalCad] = useState<boolean>(false)
    const [showModalAlt, setShowModalAlt] = useState<boolean>(false)
    const [showModalDet, setShowModalDet] = useState<boolean>(false)
    const [showModalExc, setShowModalExc] = useState<boolean>(false)

    const [formFiltro, setFormFiltro] = useState({
        txtInstituicao: '',
    });

    const [formData, setFormData] = useState({
        txtId: -1,
        txtInstituicao: '',
        txtNomeInstituicao: '',
        txtSGDB: '',
        txtNomeSGDB: '',
        txtServidor: '',
        txtBancoDados: '',
        txtUsuario: '',
        txtSenha: '',
        txtStBd: '',
        txtDescrStBd: '',
    });

    const query = useQuery<BdClienteResponse[] | null>({
        queryKey: ['useBdCliente'],
        queryFn: async () => await BdClienteService.getAll(formFiltro.txtInstituicao),
        //onError: (error) => console.log(`Something went wrong: ${error}`),
        refetchOnMount: false,
        retryOnMount: false,
        enabled: false, // formFiltro && Object.keys(formFiltro).length > 0
    })

    // const addMutation = useMutation({
    //     mutationFn: async () => await BdClienteService.post(formData.txtInstituicao, formData.txtSGDB, formData.txtServidor, formData.txtBancoDados, formData.txtUsuario, formData.txtSenha),
    //     onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useBdCliente'] }); },
    //     onError: error => console.error(error),
    // })

    // const updateMutation = useMutation({
    //     mutationFn: async () => await BdClienteService.put(formData.txtId, formData.txtInstituicao, formData.txtSGDB, formData.txtServidor, formData.txtBancoDados, formData.txtUsuario, formData.txtSenha, formData.txtStBd),
    //     onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useBdCliente'] }); },
    //     onError: error => console.error(error),
    // })

    // const deleteMutation = useMutation({
    //     mutationFn: async () => await BdClienteService.del(formData.txtId),
    //     onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['useBdCliente'] }); },
    //     onError: error => console.error(error),
    // })

    useEffect(() => {
        //console.log('useBdCliente.Entrar')
        handleLimparFiltro();

        return () => {
            //console.log('useBdCliente.Sair')
            handleLimparFiltro()
        }
    }, [])

    // DADOS FILTRO

    const handleLimparFiltro = async () => {
        setFormFiltro({ txtInstituicao: '', })
        await queryClient.removeQueries({ queryKey: ['useBdCliente'] });
        //await queryClient.resetQueries({ queryKey: ['useBdCliente'] });
    }

    const handleInputFiltro = async (e: any) => {
        const fieldName = e.currentTarget.name;  // target // currentTarget
        const fieldValue = e.currentTarget.value;
        // console.log(`${fieldName}: ${fieldValue}`);
        setFormFiltro((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const handleSubmitFiltro = async (e: any) => {
        e.preventDefault();
        await queryClient.removeQueries({ queryKey: ['useBdCliente'] });
        //await queryClient.resetQueries({ queryKey: ['useBdCliente'] });
        query.refetch();
    }

    // DADOS CADASTRO/ALTERACAO

    const handleLimparDados = async () => {
        setFormData({
            txtId: -1,
            txtInstituicao: '',
            txtNomeInstituicao: '',
            txtSGDB: '',
            txtNomeSGDB: '',
            txtServidor: '',
            txtBancoDados: '',
            txtUsuario: '',
            txtSenha: '',
            txtStBd: 'A',
            txtDescrStBd: 'Ativo',
        })
    }

    const handleInputDados = async (e: any) => {
        const fieldName = e.currentTarget.name;  // target // currentTarget
        const fieldValue = e.currentTarget.value;
        // console.log(`${fieldName}: ${fieldValue}`);
        setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }));
    }

    const _carregarDadosTela = async (id: number) => {
        const bdcliente = await BdClienteService.get(id);
        setFormData({
            txtId: bdcliente.id,
            txtInstituicao: bdcliente.ispbCliente,
            txtNomeInstituicao: bdcliente.nomeCliente,
            txtSGDB: bdcliente.conTipoSgdb,
            txtNomeSGDB: bdcliente.conNomeSgdb,
            txtServidor: bdcliente.conServidor,
            txtBancoDados: bdcliente.conBancoDados,
            txtUsuario: bdcliente.conUsuario,
            txtSenha: bdcliente.conSenha,
            txtStBd: bdcliente.stBd,
            txtDescrStBd: bdcliente.descrStBd,
        });
    }

    // INCLUIR

    const handleShowModalCad = async () => setShowModalCad(true);
    const handleHideModalCad = async () => setShowModalCad(false);

    const handleSubmitCad = async (e: any) => {
        e.preventDefault()

        if (formData.txtInstituicao.trim() == "") return
        if (formData.txtSGDB.trim() == "") return
        if (formData.txtServidor.trim() == "") return
        if (formData.txtBancoDados.trim() == "") return
        if (formData.txtUsuario.trim() == "") return
        if (formData.txtSenha.trim() == "") return

        await BdClienteService.post(formData.txtInstituicao, formData.txtSGDB, formData.txtServidor, formData.txtBancoDados, formData.txtUsuario, formData.txtSenha)
        //await addMutation.mutate();

        setShowModalCad(false)
        handleLimparDados()
        handleSubmitFiltro(e)
    }

    // ALTERAR

    const handleShowModalAlt = async (id: number) => {
        handleLimparDados()
        setShowModalAlt(true)
        _carregarDadosTela(id)
    }

    const handleHideModalAlt = async () => setShowModalAlt(false)

    const handleSubmitAlt = async (e: any) => {
        e.preventDefault()

        if (formData.txtId.toString().trim() == "") return
        if (formData.txtInstituicao.trim() == "") return
        if (formData.txtSGDB.trim() == "") return
        if (formData.txtServidor.trim() == "") return
        if (formData.txtBancoDados.trim() == "") return
        if (formData.txtUsuario.trim() == "") return
        if (formData.txtSenha.trim() == "") return
        if (formData.txtStBd.trim() == "") return

        await BdClienteService.put(formData.txtId, formData.txtInstituicao, formData.txtSGDB, formData.txtServidor, formData.txtBancoDados, formData.txtUsuario, formData.txtSenha, formData.txtStBd)
        //await updateMutation.mutate();

        setShowModalAlt(false)
        handleLimparDados()
        handleSubmitFiltro(e)
    }

    // DETALHAR

    const handleShowModalDet = async (id: number) => {
        handleLimparDados()
        setShowModalDet(true)
        _carregarDadosTela(id)
    }

    const handleHideModalDet = async () => setShowModalDet(false)

    // EXCLUIR

    const handleShowModalExc = async (id: number) => {
        handleLimparDados()
        setShowModalExc(true)
        _carregarDadosTela(id)
    }

    const handleHideModalExc = async () => setShowModalExc(false)

    const handleSubmitExc = async (e: any) => {
        e.preventDefault();

        if (formData.txtId.toString().trim() == "") return

        await BdClienteService.del(formData.txtId);
        // await deleteMutation.mutate();

        setShowModalExc(false);
        handleLimparDados();
        handleSubmitFiltro(e);
    }

    return {
        formFiltro, setFormFiltro, formData, setFormData, query,
        // addMutation, updateMutation, deleteMutation, 
        handleLimparFiltro, handleInputFiltro, handleSubmitFiltro,
        handleLimparDados, handleInputDados,
        handleShowModalCad, handleHideModalCad, showModalCad, setShowModalCad, handleSubmitCad,
        handleShowModalAlt, handleHideModalAlt, showModalAlt, setShowModalAlt, handleSubmitAlt,
        handleShowModalDet, handleHideModalDet, showModalDet, setShowModalDet,
        handleShowModalExc, handleHideModalExc, showModalExc, setShowModalExc, handleSubmitExc,
    }
}