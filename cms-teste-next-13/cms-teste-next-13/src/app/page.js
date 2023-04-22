import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Pagina atual: Home</h1>

      <ul>
        <li>
          <Link href="/dashboard">Ir para Dashboard</Link>
        </li>
      </ul>

    </div>
  )
}
