import * as React from "react"
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { parseCookies } from 'nookies'

import img_file_white from '@/assets/icons/file-white.svg'

import Layout from "@/components/layout"
import { CABINE_TOKEN } from '@/utils/constants'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { [CABINE_TOKEN]: token } = parseCookies(ctx)
    if (!token) return { redirect: { destination: '/login', permanent: false, } }
    return {
        props: {}
    }
}

export default function MonitorLogsPage() {

    const handleDetalhe = () => {
        Router.push('/monitorlogs/detalhe')
    }

    return (
        <>
            <Head>
                <title>..:: Monitor Logs - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>

                <div className="d-flex justify-content-between">
                    <h4 className="text-danger fw-bold m-4">Monitor de Logs</h4>
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
                            <div className="col-3">
                                <div className="mb-3">
                                    <label htmlFor="txtFiltroInstituicao" className="form-label">Instituição</label>
                                    <select className="form-select" id="txtFiltroInstituicao">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-3 align-self-center ms-auto">
                                <div className="d-flex gap-3">
                                    <button type="button" className="col btn btn-outline-danger">Limpar</button>
                                    <button type="submit" className="col btn btn-outline-success d-flex gap-2 justify-content-center btn-filtro">Filtrar
                                        <div className="icone-filtro"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row m-1 mt-0 p-3 dados-confirmacao">
                            <div className="col d-flex gap-3">
                                <span className="fw-bold text-danger">Níveis de Logs</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="checkNivel1" />
                                    <label className="form-check-label fw-bold" htmlFor="checkNivel1">Nível 1</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="checkNivel2" />
                                    <label className="form-check-label fw-bold" htmlFor="checkNivel2">Nível 2</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="checkNivel3" />
                                    <label className="form-check-label fw-bold" htmlFor="checkNivel3">Nível 3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* <!-- Filtro --> */}

                <div className="linha-vertical-default"></div>

                {/* <!-- Grid --> */}

                <div className="row mx-3 mb-4">

                    <div className="col-3 my-2">
                        <div className="aviso-danger caixa-acesso-rapido-danger">
                            <div className="aviso-titulo-danger">
                                <Image src={img_file_white} alt="file-white" />
                                <span>JD Consultores</span>
                            </div>
                            <div className="aviso-body">
                                <small className="text-danger">Nivel 1: <strong>20</strong></small><br />
                                <small className="text-success">Nivel 2: <strong>10</strong></small><br />
                                <small className="text-primary">Nivel 3: <strong>0</strong></small>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 my-2">
                        <div className="aviso-success caixa-acesso-rapido-success">
                            <div className="aviso-titulo-success">
                                <Image src={img_file_white} alt="file-white" />
                                <span>A. J. Renner</span>
                            </div>
                            <div className="aviso-body">
                                <small className="text-danger">Nivel 1: <strong>5</strong></small><br />
                                <small className="text-success">Nivel 2: <strong>10</strong></small><br />
                                <small className="text-primary">Nivel 3: <strong>0</strong></small>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 my-2">
                        <div className="aviso-primary caixa-acesso-rapido-primary">
                            <div className="aviso-titulo-primary">
                                <Image src={img_file_white} alt="file-white" />
                                <span>A. J. Renner</span>
                            </div>
                            <div className="aviso-body">
                                <small className="text-danger">Nivel 1: <strong>0</strong></small><br />
                                <small className="text-success">Nivel 2: <strong>0</strong></small><br />
                                <small className="text-primary">Nivel 3: <strong>10</strong></small>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 my-2">
                        <div className="aviso-warning caixa-acesso-rapido-warning">
                            <div className="aviso-titulo-warning">
                                <Image src={img_file_white} alt="file-white" />
                                <span>A. J. Renner</span>
                            </div>
                            <div className="aviso-body">
                                <small className="text-danger">Nivel 1: <strong>0</strong></small><br />
                                <small className="text-success">Nivel 2: <strong>0</strong></small><br />
                                <small className="text-primary">Nivel 3: <strong>10</strong></small>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 my-2">
                        <div className="aviso-secondary caixa-acesso-rapido-secondary">
                            <div className="aviso-titulo-secondary">
                                <Image src={img_file_white} alt="file-white" />
                                <span>A. J. Renner</span>
                            </div>
                            <div className="aviso-body">
                                <small className="text-danger">Nivel 1: <strong>0</strong></small><br />
                                <small className="text-success">Nivel 2: <strong>0</strong></small><br />
                                <small className="text-primary">Nivel 3: <strong>10</strong></small>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Grid --> */}


            </Layout>
        </>
    )
}