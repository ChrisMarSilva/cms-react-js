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
                <div className="table-responsive m-4 ">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th className="border-thead-acoes">
                                    <div className="d-flex w-100 justify-content-around align-self-center">
                                        <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_white} alt="detail-white" title="Detalhar" />
                                    </div>
                                </th>
                                <th>Instituição</th>
                                <th>QTD Nível 1</th>
                                <th>QTD Nível 2</th>
                                <th>QTD Nível 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-tbody-acoes">
                                    <div className="acoes d-flex w-100 justify-content-around align-self-center">
                                        <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_red} alt="detail-red" onClick={() => handleDetalhe()} />
                                    </div>
                                </td>
                                <td> IF 1</td>
                                <td> 0 </td>
                                <td> 30 </td>
                                <td> 40 </td>
                            </tr>
                            <tr>
                                <td className="border-tbody-acoes">
                                    <div className="acoes d-flex w-100 justify-content-around align-self-center">
                                        <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_red} alt="detail-red" onClick={() => handleDetalhe()} />
                                    </div>
                                </td>
                                <td> IF 1</td>
                                <td> 0 </td>
                                <td> 30 </td>
                                <td> 40 </td>
                            </tr>
                            <tr>
                                <td className="border-tbody-acoes">
                                    <div className="acoes d-flex w-100 justify-content-around align-self-center">
                                        <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_red} alt="detail-red" onClick={() => handleDetalhe()} />
                                    </div>
                                </td>
                                <td> IF 1</td>
                                <td> 0 </td>
                                <td> 30 </td>
                                <td> 40 </td>
                            </tr>
                            <tr>
                                <td className="border-tbody-acoes">
                                    <div className="acoes d-flex w-100 justify-content-around align-self-center">
                                        <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_red} alt="detail-red" onClick={() => handleDetalhe()} />
                                    </div>
                                </td>
                                <td> IF 1</td>
                                <td> 0 </td>
                                <td> 30 </td>
                                <td> 40 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Grid --> */}

            </Layout>
        </>
    )
}