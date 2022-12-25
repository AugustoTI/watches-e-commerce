import Head from 'next/head'
import { Header } from '~/components/Header'
import { Main } from '~/components/Main'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Watch sales website</title>
      </Head>
      <Header />
      <main>
        <Main />
      </main>
    </>
  )
}
