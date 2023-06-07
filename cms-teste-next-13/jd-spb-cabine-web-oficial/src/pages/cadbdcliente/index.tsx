import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { parseCookies } from 'nookies'

import { CABINE_TOKEN } from '@/utils/constants'
import Layout from '@/components/layout'
import { useIspb } from '@/hooks/useIspb';
import { useBdCliente } from '@/hooks/useBdCliente'
import img_add_white from '@/assets/icons/add-white.svg'

import CadBdClienteFiltro from './filtro'
import CadBdClienteGrid from './grid'
import CadBdClienteModalCad from './modalCad'
import CadBdClienteModalAlt from './modalAlt'
import CadBdClienteModalDet from './modalDet'
import CadBdClienteModalExc from './modalExc'

export default function CadBdClientePage() {

    const {
        mutationListarIF, lstIspb,
        mutationListarIFExist, lstIspbIfExist,
        mutationListarIFNotExist, lstIspbIfNotExist,
    } = useIspb()

    const {
        formFiltro, formData, query,
        handleLimparFiltro, handleInputFiltro, handleSubmitFiltro,
        handleLimparDados, handleInputDados,
        handleShowModalCad, handleHideModalCad, showModalCad, handleSubmitCad,
        handleShowModalAlt, handleHideModalAlt, showModalAlt, handleSubmitAlt,
        handleShowModalDet, handleHideModalDet, showModalDet,
        handleShowModalExc, handleHideModalExc, showModalExc, handleSubmitExc,
    } = useBdCliente()

    useEffect(() => {
        // console.log('CadBdClientePage.Entrar')
        mutationListarIF.mutate();

        return () => {
            // console.log('CadBdClientePage.Sair')
        }
    }, [])

    return (
        <>
            <Head>
                <title>..:: Cad. BD Cliente - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>

                <div className="d-flex justify-content-between">
                    <h4 className="text-danger fw-bold m-4">Cadastro de Banco de Dados</h4>
                    <button onClick={handleShowModalCad} type="button" className="col-1 m-4 btn btn-success d-flex gap-2 justify-content-center btn-filtro">
                        Incluir
                        <Image src={img_add_white} className="" alt="add-white" />
                    </button>
                </div>

                <div className="linha-vertical-danger"></div>

                <CadBdClienteFiltro
                    txtInstituicao={formFiltro.txtInstituicao}
                    lstIspb={lstIspb}
                    isLoading={query.isLoading}
                    handleInput={handleInputFiltro}
                    handleLimpar={handleLimparFiltro}
                    handleSubmit={handleSubmitFiltro}
                />

                <div className="linha-vertical-default"></div>

                <CadBdClienteGrid
                    query={query}
                    handleShowModalAlt={handleShowModalAlt}
                    handleShowModalDet={handleShowModalDet}
                    handleShowModalExc={handleShowModalExc}
                />

                {showModalCad &&
                    <CadBdClienteModalCad
                        isLoading={query.isLoading}
                        isError={query.isError}
                        error={query.error}
                        lstIspb={lstIspbIfNotExist}
                        mutationListarIF={mutationListarIFNotExist}
                        handleHideModal={handleHideModalCad}
                        show={showModalCad}
                        txtInstituicao={formData.txtInstituicao}
                        txtSGDB={formData.txtSGDB}
                        txtServidor={formData.txtServidor}
                        txtBancoDados={formData.txtBancoDados}
                        txtUsuario={formData.txtUsuario}
                        txtSenha={formData.txtSenha}
                        txtStBd={formData.txtStBd}
                        handleInput={handleInputDados}
                        handleLimpar={handleLimparDados}
                        handleSubmit={handleSubmitCad}
                    />
                }

                {showModalAlt &&
                    <CadBdClienteModalAlt
                        isLoading={query.isLoading}
                        isError={query.isError}
                        error={query.error}
                        lstIspb={lstIspbIfExist}
                        mutationListarIF={mutationListarIFExist}
                        handleHideModal={handleHideModalAlt}
                        show={showModalAlt}
                        txtId={formData.txtId}
                        txtInstituicao={formData.txtInstituicao}
                        txtSGDB={formData.txtSGDB}
                        txtServidor={formData.txtServidor}
                        txtBancoDados={formData.txtBancoDados}
                        txtUsuario={formData.txtUsuario}
                        txtSenha={formData.txtSenha}
                        txtStBd={formData.txtStBd}
                        handleInput={handleInputDados}
                        handleLimpar={handleLimparDados}
                        handleSubmit={handleSubmitAlt}
                    />
                }

                {showModalDet &&
                    <CadBdClienteModalDet
                        isLoading={query.isLoading}
                        isError={query.isError}
                        error={query.error}
                        handleHideModal={handleHideModalDet}
                        show={showModalDet}
                        txtId={formData.txtId}
                        txtInstituicao={formData.txtInstituicao}
                        txtNomeInstituicao={formData.txtNomeInstituicao}
                        txtNomeSGDB={formData.txtNomeSGDB}
                        txtServidor={formData.txtServidor}
                        txtBancoDados={formData.txtBancoDados}
                        txtUsuario={formData.txtUsuario}
                        txtSenha={formData.txtSenha}
                        txtDescrStBd={formData.txtDescrStBd}
                        handleLimpar={handleLimparDados}
                    />
                }

                {showModalExc &&
                    <CadBdClienteModalExc
                        isLoading={query.isLoading}
                        isError={query.isError}
                        error={query.error}
                        handleHideModal={handleHideModalExc}
                        show={showModalExc}
                        txtId={formData.txtId}
                        txtInstituicao={formData.txtInstituicao}
                        txtNomeInstituicao={formData.txtNomeInstituicao}
                        txtNomeSGDB={formData.txtNomeSGDB}
                        txtServidor={formData.txtServidor}
                        txtBancoDados={formData.txtBancoDados}
                        handleLimpar={handleLimparDados}
                        handleSubmit={handleSubmitExc}
                    />
                }

            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { [CABINE_TOKEN]: token } = parseCookies(ctx)
    if (!token) return { redirect: { destination: '/login', permanent: false, } }
    return {
        props: {}
    }
}
