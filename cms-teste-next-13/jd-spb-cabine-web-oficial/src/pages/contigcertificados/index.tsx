//import * as React from "react"
import { GetServerSideProps, } from 'next';
import Head from 'next/head';
import { parseCookies, } from 'nookies';

import Layout from '@/components/layout';
import { CABINE_TOKEN } from '@/utils/constants';

export default function ContigCertificadoPage() {
    return (
        <>
            <Head>
                <title>..:: Consulta de Certificado - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>

                <div className="d-flex justify-content-between">
                    <h4 className="text-danger fw-bold m-4">Consulta de Certificado</h4>
                </div>

                <div className="linha-vertical-danger"></div>

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
