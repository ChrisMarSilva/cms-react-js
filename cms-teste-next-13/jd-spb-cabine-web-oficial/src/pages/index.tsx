import { useContext } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'

import Layout from "@/components/layout"
import { AuthContext } from '@/contexts/AuthContext'
import { CABINE_TOKEN } from '@/utils/constants'

export default function IndexPage() {
    const { user } = useContext(AuthContext)

    return (
        <>
            <Head>
                <title>..:: Dashboard - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>
                <h4 className="text-danger fw-bold m-4">Dashboard</h4>
                <div className="linha-vertical-danger"></div>
                {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { [CABINE_TOKEN]: token } = parseCookies(ctx)
    //console.log(`getServerSideProps - CABINE_TOKEN: ${CABINE_TOKEN} - token: ${token}`)
    if (!token) return { redirect: { destination: '/login', permanent: false, } }
    return {
        props: {}
    }
}
