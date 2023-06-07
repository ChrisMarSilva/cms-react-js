import * as React from "react"
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { parseCookies } from 'nookies'

import img_detail_white from '@/assets/icons/detail-white.svg'
import img_detail_red from '@/assets/icons/detail-red.svg'

import Layout from "@/components/layout"
import { CABINE_TOKEN } from '@/utils/constants'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { [CABINE_TOKEN]: token } = parseCookies(ctx)
    if (!token) return { redirect: { destination: '/login', permanent: false, } }
    return {
        props: {}
    }
}

export default function MonitorLogsDetalhePage() {

    return (
        <>
            <Head>
                <title>..:: Detalhe do Log - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>

                <div className="d-flex justify-content-between">
                    <h4 className="text-danger fw-bold m-4">Detalhe do Log: IF JD Consultores</h4>
                </div>

                <div className="linha-vertical-danger"></div>

                {/* <!-- Filtro --> */}
                <form className="row m-3 mt-0 pt-3 ">
                    <div className="col">
                        <span className="fw-bold">Filtro de Pesquisa</span>

                        <div className="row">
                            <div className="col-2">
                                <div className="mb-3">
                                    <label htmlFor="inputData" className="form-label">Data</label>
                                    <input type="date" className="form-control" id="inputData" name="inputDescricaoNaoContem" placeholder="MM/AAAA" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="mb-3">
                                    <label htmlFor="inputHoraInicio" className="form-label">Hora Início</label>
                                    <input type="time" className="form-control" id="inputHoraInicio" name="inputHoraInicio" placeholder="" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="mb-3">
                                    <label htmlFor="inputHoraFim" className="form-label">Hora Fim</label>
                                    <input type="time" className="form-control" id="inputHoraFim" name="inputHoraFim" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="inputDescricaoContem" className="form-label">Descrição contém</label>
                                    <input maxLength={4000} type="text" className="form-control" id="inputDescricaoContem" name="inputDescricaoContem" placeholder="" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-3">
                                    <label htmlFor="inputDescricaoNaoContem" className="form-label">Descrição não contém</label>
                                    <input maxLength={4000} type="text" className="form-control" id="inputDescricaoNaoContem" name="inputDescricaoNaoContem" placeholder="" />
                                </div>
                            </div>
                            <div className="col-3 align-self-center ms-auto">
                                <div className="d-flex gap-3">
                                    <button type="button" className="col btn btn-outline-danger">Limpar</button>
                                    <button type="submit" className="col btn btn-outline-success d-flex gap-2 justify-content-center btn-filtro" >
                                        Filtrar
                                        <div className="icone-filtro"></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
                {/* <!-- Filtro --> */}

                <div className="linha-vertical-default"></div>

                {/* <!-- Grid --> */}
                <div className="table-responsive m-4 ">
                    <table className="table table-striped table-hover">
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
                            <tr>
                                <td>MO230531134325076130</td>
                                <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>Conexão ao Banco de Dados realizada com sucesso - JDSPB_IntSvc. Servidor JDSP108</td>
                                <td>INT</td>
                                <td>INT</td>
                                <td>JDINTSVC</td>
                                <td>3</td>
                                <td>31/05/2023 13:43:25</td>
                            </tr>
                            <tr>
                                <td>MO230531134325076130</td>
                                <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>Interface iniciada com sucesso - JDSPB_IntSvc. Versão: 8.6.20.0 Data: 13/04/2023 13:01:12 Máquina: JDSP108</td>
                                <td>INT</td>
                                <td>INT</td>
                                <td>JDINTSVC</td>
                                <td>3</td>
                                <td>31/05/2023 13:43:25</td>
                            </tr>
                            <tr>
                                <td>MO230531134325076130</td>
                                <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>Conexão ao Banco de Dados realizada com sucesso - JDSPB_IntCabSvc. Servidor: JDSP108</td>
                                <td>CAB</td>
                                <td>CAB</td>
                                <td>JDSPB_IntCabSvc</td>
                                <td>3</td>
                                <td>31/05/2023 13:43:25</td>
                            </tr>
                            <tr>
                                <td>MO230531134325076130</td>
                                <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>Não foi possível Conectar com o MQ - FQMLocal: QM.04358798.01 - sNomeQMFilaEnvio: QR.REQ.04358798.00038166.01 - CodigoErro: 2059 - NomeErro: MQRC_Q_MGR_NOT_AVAILABLE (MQAX: Falha ao conectar ao QueueManager (QM.04358798.01). Erro: MQAX200.MQSession::AccessQueueManager CompletionCode = 2, ReasonCode = 2059, ReasonName = MQRC_Q_MGR_NOT_AVAILABLE)</td>
                                <td>INT</td>
                                <td>CAB</td>
                                <td>TransmitirMensagem</td>
                                <td>1</td>
                                <td>31/05/2023 13:43:25</td>
                            </tr>
                            <tr>
                                <td>MO230531134325076130</td>
                                <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>Falha ao Transmitir Mensagem QM.</td>
                                <td>INT</td>
                                <td>CAB</td>
                                <td>TIntCABMQExpressT1.G</td>
                                <td>1</td>
                                <td>31/05/2023 13:43:25</td>
                            </tr>
                            <tr>
                                <td>MO230531134325076130</td>
                                <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>Piloto Automático foi finalizado - JDSPB_PatSvc (JDSP108)</td>
                                <td>PAT</td>
                                <td>PAT</td>
                                <td>JDPATSVC</td>
                                <td>3</td>
                                <td>31/05/2023 13:43:25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Grid --> */}


            </Layout>
        </>
    )
}