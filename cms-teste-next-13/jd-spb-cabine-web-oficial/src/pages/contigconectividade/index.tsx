//import * as React from "react"
import { useEffect, } from 'react';
import { GetServerSideProps, } from 'next';
import Head from 'next/head';
import { parseCookies, } from 'nookies';
import moment from 'moment';

import Layout from '@/components/layout';
import { CABINE_TOKEN } from '@/utils/constants';
import { useIspb } from '@/hooks/useIspb';
import { useMonitorConectividades } from "@/hooks/useMonitorConectividades";
import { useBdCliente } from '@/hooks/useBdCliente';
import ContigConectividadeModal from './modal';

export default function ContigConectividadePage() {

    const { mutationListarIFExist, lstIspbIfExist, } = useIspb()
    const { formFiltro, query, handleLimpar, handleInput, handleSubmit, } = useMonitorConectividades()

    const {
        handleLimparFiltro, handleInputFiltro, handleSubmitFiltro,
        handleLimparDados, handleInputDados,
        handleShowModalCad, handleHideModalCad, showModalCad, handleSubmitCad,
        handleShowModalAlt, handleHideModalAlt, showModalAlt, handleSubmitAlt,
        handleShowModalDet, handleHideModalDet, showModalDet,
        handleShowModalExc, handleHideModalExc, showModalExc, handleSubmitExc,
    } = useBdCliente()


    useEffect(() => {
        // console.log('ContigConectividadePage.Entrar')
        mutationListarIFExist.mutate();

        return () => {
            // console.log('ContigConectividadePage.Sair')
        }
    }, [])

    return (
        <>
            <Head>
                <title>..:: Teste de Conectividade - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>

                <div className="d-flex justify-content-between">
                    <h4 className="text-danger fw-bold m-4">Teste de Conectividade</h4>
                    <button onClick={handleShowModalCad} type="button" className="col-1 m-4 btn btn-outline-success d-flex gap-2 justify-content-center btn-integrar">
                        <div className="icone-integrar"></div>
                        Gerar Msg
                    </button>
                </div>

                <div className="linha-vertical-danger"></div>

                {/* <!-- Filtro --> */}
                <form className="row m-3 pt-3" onSubmit={handleSubmit}>
                    <div className="col">
                        <span className="fw-bold">Filtro de Pesquisa</span>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="txtInstituicao" className="form-label">Instituição</label>
                                <select value={formFiltro.txtInstituicao} onChange={handleInput} className="form-select" id="txtInstituicao" name="txtInstituicao" required={true}>
                                    <option value=""></option>
                                    {/* {lstIspbIfExist && lstIspbIfExist?.length > 0 && lstIspbIfExist?.map((item: Ispb) => (<option key={item.ispb} value={item.ispb}>{item.ispb} - {item.nome}</option>))} */}
                                    {lstIspbIfExist && lstIspbIfExist?.length > 0 && lstIspbIfExist?.map(({ ispb, nome }: { ispb: string; nome: string }) => (<option key={ispb} value={ispb}>{ispb} - {nome}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 mb-3">
                                <label htmlFor="txtData" className="form-label">Data</label>
                                <input value={formFiltro.txtData} onChange={handleInput} required={true} type="date" className="form-control" id="txtData" name="txtData" placeholder="MM/AAAA" />
                            </div>
                            <div className="col-2 mb-3">
                                <label htmlFor="txtHoraInicio" className="form-label">Hora Início</label>
                                <input value={formFiltro.txtHoraInicio} onChange={handleInput} type="time" className="form-control" id="txtHoraInicio" name="txtHoraInicio" placeholder="" />
                            </div>
                            <div className="col-2 mb-3">
                                <label htmlFor="txtHoraFim" className="form-label">Hora Fim</label>
                                <input value={formFiltro.txtHoraFim} onChange={handleInput} type="time" className="form-control" id="txtHoraFim" name="txtHoraFim" placeholder="" />
                            </div>
                            <div className="col-3 align-self-center ms-auto">
                                <div className="d-flex gap-3">
                                    <button disabled={query.isLoading} onClick={handleLimpar} type="button" className="col btn btn-outline-danger">
                                        Limpar
                                    </button>
                                    <button disabled={query.isLoading} type="submit" className="col btn btn-outline-success d-flex gap-2 justify-content-center btn-filtro" >
                                        Filtrar
                                        <div className={query.isLoading ? "icone-filtro-loop" : "icone-filtro"}></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* <!-- Filtro --> */}

                <div className="linha-vertical-default"></div>

                {/* <!-- Grid --> */}
                <div className="table-responsive m-4">

                    <div className="row dados-confirmacao ">
                        <div className="col d-flex gap-3">
                            <label className="form-check-label fw-bold m-2" htmlFor="checkDevolucoesPendentes">
                                Quantidade: <span className="fw-normal">({query.data?.length})</span>
                            </label>
                        </div>
                    </div>

                    <table className="table table-striped" id="tabelaMonitorIntegracoes">
                        <thead>
                            <tr>
                                <th>Câmara</th>
                                <th>Data\Hora</th>
                                <th>Núm.Msg</th>
                                <th>Msg ECO</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {query.isLoading && <tr><td colSpan={7}>Carregando...</td></tr>}
                            {query.isError && <tr><td style={{ whiteSpace: 'normal', textAlign: 'left', }} colSpan={7}><strong>Error:</strong> {(query.error as Error).message}</td></tr>}
                            {(!query.isError && !query.isLoading && (!query.data || query.data.length == 0)) && <tr><td colSpan={7}>Nenhum registro encontrado...</td></tr>}
                            {query.data && query.data?.length > 0 && query.data?.map(({ codErro, codSistJd, data, hora, visto, erro, numeroMensagem, prioridade, codSistJdOri, codErroUnico }: { codErro: string; codSistJd: string; data: string; hora: string; visto: string; erro: string; numeroMensagem: string; prioridade: string; codSistJdOri: string; codErroUnico: string }) => ( //query.data?.map(log => {
                                <>
                                    <tr key={codErro}>
                                        <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>{erro}</td>
                                        <td>{moment(data, "YYYYMMDD").format("DD/MM/YYYY")} {hora}</td>
                                        <td>{codErro}</td>
                                        <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>{erro}</td>
                                        <td>{prioridade}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>

                </div>
                {/* <!-- Grid --> */}

                {showModalCad &&
                    <ContigConectividadeModal
                        isLoading={query.isLoading}
                        isError={query.isError}
                        error={query.error}
                        lstIspb={lstIspbIfExist}
                        mutationListarIF={mutationListarIFExist}
                        handleHideModal={handleHideModalCad}
                        show={showModalCad}
                        txtInstituicao={formFiltro.txtHoraFim}
                        txtSGDB={formFiltro.txtHoraFim}
                        txtServidor={formFiltro.txtHoraFim}
                        txtBancoDados={formFiltro.txtHoraFim}
                        txtUsuario={formFiltro.txtHoraFim}
                        txtSenha={formFiltro.txtHoraFim}
                        txtStBd={formFiltro.txtHoraFim}
                        txtMsgECO={''}
                        handleInput={handleInputDados}
                        handleLimpar={handleLimparDados}
                        handleSubmit={handleSubmitCad}
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
