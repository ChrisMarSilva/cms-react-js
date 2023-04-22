import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <p><Link href="/users">Users</Link></p>
    </main>
  )
}
