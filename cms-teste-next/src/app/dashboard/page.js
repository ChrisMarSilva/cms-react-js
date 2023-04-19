import Link from 'next/link'

export default function Dashboard() {
    return (
        <div>
            <h1>Pagina atual: Dashboard</h1>

            <ul>
                <li>
                    <Link href="/">Ir para Home</Link>
                </li>
            </ul>

        </div>
    )
}