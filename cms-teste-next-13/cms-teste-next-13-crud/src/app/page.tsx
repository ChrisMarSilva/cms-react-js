import type { Metadata } from 'next';
import Layout from '@/components/layout';

export const metadata: Metadata = {
  title: 'Home - CMS Crud',
}

const Home = async () => { // export default function Home() {
  return (
    <Layout>
      {/* <h5>Home</h5> */}
    </Layout>
  )
}

export default Home;
