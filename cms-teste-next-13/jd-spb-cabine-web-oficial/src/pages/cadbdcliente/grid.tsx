//import React from 'react'
import Image from 'next/image'

import img_alter_white from '@/assets/icons/alter-white.svg'
import img_detail_white from '@/assets/icons/detail-white.svg'
import img_close_white from '@/assets/icons/close-white-table.svg'
import img_alter_red from '@/assets/icons/alter-red.svg'
import img_detail_red from '@/assets/icons/detail-red.svg'
import img_close_red from '@/assets/icons/close-red.svg'

//{ Component, pageProps }: AppProps


export default function CadBdClienteGrid(props: any) {
    //  console.log(props)
    return (
        <>
            {/* <!-- Grid --> */}
            <div className="table-responsive m-4 ">

                <div className="row dados-confirmacao ">
                    <div className="col d-flex gap-3">
                        <label className="form-check-label fw-bold m-2" htmlFor="checkDevolucoesPendentes">
                            Quantidade: <span className="fw-normal">({props?.query?.data?.length})</span>
                        </label>
                    </div>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th className="border-thead-acoes">
                                <div className="d-flex w-100 justify-content-around align-self-center">
                                    <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_white} alt="detail-white" title="Detalhar" />
                                    <Image style={{ width: 'auto', height: 'auto' }} src={img_alter_white} alt="alter-white" title="Alterar" />
                                    <Image style={{ width: 'auto', height: 'auto' }} src={img_close_white} alt="close-white" title="Excluir" />
                                </div>
                            </th>
                            <th>Instituição</th>
                            <th>SGDB</th>
                            <th>Servidor</th>
                            <th>Banco</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props?.query?.isLoading && <tr><td colSpan={7}>Carregando...</td></tr>}
                        {props?.query?.isError && <tr><td style={{ whiteSpace: 'normal', textAlign: 'left', }} colSpan={7}><strong>Error:</strong> {(props?.query?.error as Error).message}</td></tr>}
                        {(!props?.query?.isError && !props?.query?.isLoading && (!props?.query?.data || props?.query?.data?.length == 0)) && <tr><td colSpan={7}>Nenhum registro encontrado...</td></tr>}
                        {/* {props.query.data && props.query.data?.map((item: BdClienteResponse) => { */}
                        {props?.query?.data && props?.query?.data?.length > 0 && props?.query?.data?.map(({ id, ispbCliente, nomeCliente, conTipoSgdb, conNomeSgdb, conServidor, conBancoDados, conUsuario, conSenha, stBd, descrStBd }: { id: number; ispbCliente: string; nomeCliente: string; conTipoSgdb: string; conNomeSgdb: string; conServidor: string; conBancoDados: string; conUsuario: string; conSenha: string; stBd: string; descrStBd: string }) => (
                            <>
                                <tr key={id}>
                                    <td className="border-tbody-acoes">
                                        <div className="acoes d-flex w-100 justify-content-around align-self-center">
                                            <Image style={{ width: 'auto', height: 'auto' }} src={img_detail_red} alt="detail-red" onClick={() => props.handleShowModalDet(id)} />
                                            <Image style={{ width: 'auto', height: 'auto' }} src={img_alter_red} alt="alter-red" onClick={() => props.handleShowModalAlt(id)} />
                                            <Image style={{ width: 'auto', height: 'auto' }} src={img_close_red} alt="close-red" onClick={() => props.handleShowModalExc(id)} />
                                        </div>
                                    </td>
                                    <td>{nomeCliente}</td>
                                    <td>{conNomeSgdb}</td>
                                    <td>{conServidor}</td>
                                    <td>{conBancoDados}</td>
                                    <td>{descrStBd}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <!-- Grid --> */}
        </>
    )
}