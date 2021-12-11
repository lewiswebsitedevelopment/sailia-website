import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/index/hero'
import USP from '../components/index/usp'

export default function Home() {
  return (
    <div class="font-montserrat">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class="flex-1 overflow-y-auto max-w-7xl mx-auto">
        <Hero />
        <USP />
      </main>
      <Footer />
    </div>
  )
}
