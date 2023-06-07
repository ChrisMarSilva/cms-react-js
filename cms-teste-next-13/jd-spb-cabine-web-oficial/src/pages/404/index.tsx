import Head from 'next/head'
import Link from 'next/link'
import Layout from "@/components/layout"

export default function NotFoundPage() { // const NotFound = () => {
    return (
        <>
            <Head>
                <title>..:: 404 - JD SPB PSTI Cabine Web ::..</title>
            </Head>
            <Layout>
                <div>
                    <h1>404</h1>
                    <div>
                        <p>Oops, não conseguimos encontrar essa página!</p>
                        <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
                    </div>
                    <Link href="/dashboard">Ir para a Página Inicial</Link>
                </div>
            </Layout>
        </>
    )
}

//export default NotFound;
