import * as React from "react"
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import moment from 'moment'

import Layout from "@/components/layout"
import { useLogs } from "@/hooks/useLogs"
import { CABINE_TOKEN } from '@/utils/constants'

export default function LogsPage() {

  const { formFiltro, query, handleLimpar, handleInput, handleSubmit, } = useLogs()

  return (
    <>
      <Head>
        <title>..:: Log de Erros - JD SPB PSTI Cabine Web ::..</title>
      </Head>
      <Layout>

        <div className="d-flex justify-content-between">
          <h4 className="text-danger fw-bold m-4">Log de Erros</h4>
        </div>

        <div className="linha-vertical-danger"></div>

        {/* <!-- Filtro --> */}
        <form className="row m-3 pt-3 " onSubmit={handleSubmit}>
          <div className="col">
            <span className="fw-bold">Filtro de Pesquisa</span>
            <div className="row">
              <div className="col-2">
                <div className="mb-3">
                  <label htmlFor="txtData" className="form-label">Data</label>
                  <input value={formFiltro.txtData} onChange={handleInput} required type="date" className="form-control" id="txtData" name="txtData" placeholder="MM/AAAA" />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <label htmlFor="txtHoraInicio" className="form-label">Hora Início</label>
                  <input value={formFiltro.txtHoraInicio} onChange={handleInput} type="time" className="form-control" id="txtHoraInicio" name="txtHoraInicio" placeholder="" />
                </div>
              </div>
              <div className="col-2">
                <div className="mb-3">
                  <label htmlFor="txtHoraFim" className="form-label">Hora Fim</label>
                  <input value={formFiltro.txtHoraFim} onChange={handleInput} type="time" className="form-control" id="txtHoraFim" name="txtHoraFim" placeholder="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="txtDescricaoContem" className="form-label">Descrição contém</label>
                  <input value={formFiltro.txtDescricaoContem} onChange={handleInput} maxLength={4000} type="text" className="form-control" id="txtDescricaoContem" name="txtDescricaoContem" placeholder="" />
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="txtDescricaoNaoContem" className="form-label">Descrição não contém</label>
                  <input value={formFiltro.txtDescricaoNaoContem} onChange={handleInput} maxLength={4000} type="text" className="form-control" id="txtDescricaoNaoContem" name="txtDescricaoNaoContem" placeholder="" />
                </div>
              </div>
              <div className="col-3 align-self-center ms-auto">
                <div className="d-flex gap-3">
                  <button disabled={query.isLoading} onClick={handleLimpar} type="button" className="col btn btn-outline-danger">Limpar</button>
                  <button disabled={query.isLoading} type="submit" className="col btn btn-outline-success d-flex gap-2 justify-content-center btn-filtro" >
                    Filtrar
                    <div className={query.isLoading ? "icone-filtro" : "icone-filtro"} ></div>
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
              {query.data && query.data?.length > 0 && query.data?.map(log => (
                <>
                  <tr key={log.codErro}>
                    <td>{log.codErro}</td>
                    <td style={{ whiteSpace: 'normal', textAlign: 'left', }}>{log.erro}</td>
                    <td>{log.codSistJd}</td>
                    <td>{log.codSistJdOri}</td>
                    <td>{log.numeroMensagem}</td>
                    <td>{log.prioridade}</td>
                    <td>{moment(log.data, "YYYYMMDD").format("DD/MM/YYYY")} {log.hora}</td>
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
