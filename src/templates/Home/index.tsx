import Head from 'next/head'
import { Header } from '~/components/Header'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Watch sales website</title>
        <meta name="description" content="Website selling imported watches" />
      </Head>
      <Header />
    </>
  )
}
