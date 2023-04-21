import type { Metadata } from 'next'
import Link from 'next/link'
import getAllUsers from '../../../lib/user/getAllUsers'

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData
  //console.log(users)

  const content = (
    <section>
      <h1><Link href="/">Back to Home</Link></h1>
      <br />
      {users.map(user => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )

  return content
}