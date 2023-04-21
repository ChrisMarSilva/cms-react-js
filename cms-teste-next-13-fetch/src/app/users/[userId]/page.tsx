import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import getUser from '../../../../lib/user/getUser'
import getUserPost from '../../../../lib/user/getUserPosts'
import UserPosts from './components/UserPosts'

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPost(userId)

  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userData

  //console.log(user)
  //console.log(userPosts)

  return (
    <>
      <h1> <Link href="/">Home</Link> || <Link href="/users">Users</Link> </h1>
      <br />
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}