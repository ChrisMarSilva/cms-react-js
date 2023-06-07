//import * as React from "react"
import { useEffect, } from 'react';
import { GetServerSideProps, } from 'next';
import Head from 'next/head';
import { parseCookies, } from 'nookies';
import moment from 'moment';

import Layout from '@/components/layout';
import { CABINE_TOKEN } from '@/utils/constants';
import { useIspb } from '@/hooks/useIspb';
import { useMonitorLogs } from "@/hooks/useMonitorLogs";

export default function MonitorLogsPage() {

    const { mutationListarIFExist, lstIspbIfExist, } = useIspb()
    const { formFiltro, query, handleLimpar, handleInput, handleSubmit, } = useMonitorLogs()

    useEffect(() => {
        // console.log('MonitorLogsPage.Entrar')
        mutationListarIFExist.mutate();

        return () => {
            // console.log('MonitorLogsPage.Sair')
        }
    }, [])

    return (
        <>
            <Head>
                <title>..:: Monitor de Logs - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>

                <div className="d-flex justify-content-between">
                    <h4 className="text-danger fw-bold m-4">Monitor de Logs</h4>
                </div>

                <div className="linha-vertical-danger"></div>

                {/* <!-- Filtro --> */}
                <form className="row m-3 pt-3" onSubmit={handleSubmit}>
                    <div className="col">
                        <span className="fw-bold">Filtro de Pesquisa</span>
                        <div className="row">
                            <div className="col-5 mb-3">
                                <label htmlFor="txtInstituicao" className="form-label">Instituição</label>
                                <select value={formFiltro.txtInstituicao} onChange={handleInput} className="form-select" id="txtInstituicao" name="txtInstituicao" required={true}>
                                    <option value=""></option>
                                    {/* {lstIspbIfExist && lstIspbIfExist?.length > 0 && lstIspbIfExist?.map((item: Ispb) => (<option key={item.ispb} value={item.ispb}>{item.ispb} - {item.nome}</option>))} */}
                                    {lstIspbIfExist && lstIspbIfExist?.length > 0 && lstIspbIfExist?.map(({ ispb, nome }: { ispb: string; nome: string }) => (<option key={ispb} value={ispb}>{ispb} - {nome}</option>))}
                                </select>
                            </div>
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
                        </div>
                        <div className="row">
                            <div className="col-5 mb-3">
                                <label htmlFor="txtDescricaoContem" className="form-label">Descrição contém</label>
                                <input value={formFiltro.txtDescricaoContem} onChange={handleInput} maxLength={4000} type="text" className="form-control" id="txtDescricaoContem" name="txtDescricaoContem" placeholder="" />
                            </div>
                            <div className="col-4 mb-3">
                                <label htmlFor="txtDescricaoNaoContem" className="form-label">Descrição não contém</label>
                                <input value={formFiltro.txtDescricaoNaoContem} onChange={handleInput} maxLength={4000} type="text" className="form-control" id="txtDescricaoNaoContem" name="txtDescricaoNaoContem" placeholder="" />
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
                        {/* <div className="row m-1 mt-0 p-3 dados-confirmacao">
                            <div className="col d-flex gap-3">
                                <span className="fw-bold text-danger">Níveis de Logs</span>
                                <div className="form-check">
                                    <input value={formFiltro.txtNivel1} onChange={handleInput} className="form-check-input" type="checkbox" value="" id="txtNivel1" name="txtNivel1" />
                                    <label className="form-check-label fw-bold" htmlFor="txtNivel1">Nível 1</label>
                                </div>
                                <div className="form-check">
                                    <input value={formFiltro.txtNivel2} onChange={handleInput} className="form-check-input" type="checkbox" value="" id="txtNivel2" name="txtNivel2" />
                                    <label className="form-check-label fw-bold" htmlFor="txtNivel2">Nível 2</label>
                                </div>
                                <div className="form-check">
                                    <input value={formFiltro.txtNivel3} onChange={handleInput} className="form-check-input" type="checkbox" value="" id="txtNivel3" name="txtNivel3" />
                                    <label className="form-check-label fw-bold" htmlFor="txtNivel3">Nível 3</label>
                                </div>
                            </div>
                        </div> */}
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
                                <th>Id</th>
                                <th>Descrição</th>
                                <th>Sistema</th>
                                <th>Origem</th>
                                <th>Núm.Msg</th>
                                <th>Nivel</th>
                                <th>Data\Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {query.isLoading && <tr><td colSpan={7}>Carregando...</td></tr>}
                            {query.isError && <tr><td style={{ whiteSpace: 'normal', textAlign: 'left', }} colSpan={7}><strong>Error:</strong> {(query.error as Error).message}</td></tr>}
                            {(!query.isError && !query.isLoading && (!query.data || query.data.length == 0)) && <tr><td colSpan={7}>Nenhum registro encontrado...</td></tr>}
                            {query.data && query.data?.length > 0 && query.data?.map(({ codErro, codSistJd, data, hora, visto, erro, numeroMensagem, prioridade, codSistJdOri, codErroUnico }: { codErro: string; codSistJd: string; data: string; hora: string; visto: string; erro: string; numeroMensagem: string; prioridade: string; codSistJdOri: string; codErroUnico: string }) => ( //query.data?.map(log => {
                                <>
                                    <tr key={codErro}>
                                        <td>{codErro}</td>
                                        <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>{erro}</td>
                                        <td>{codSistJd}</td>
                                        <td>{codSistJdOri}</td>
                                        <td>{numeroMensagem}</td>
                                        <td>{prioridade}</td>
                                        <td>{moment(data, "YYYYMMDD").format("DD/MM/YYYY")} {hora}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>

                </div>
                {/* <!-- Grid --> */}

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
