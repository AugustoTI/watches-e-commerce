import Head from 'next/head'
import { Header } from '~/components/organisms/Header'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Watch sales website</title>
      </Head>
      <Header />
    </>
  )
}
