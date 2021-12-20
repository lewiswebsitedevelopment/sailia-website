import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/index/hero'
import USP from '../components/index/usp'
import SVP from '../components/index/svp'
import ToPricing from '../components/small/directToPricing'

export default function Home() {
  return (
    <div class="w-full font-montserrat text-text-900">
      <Head>
        <title>Sailia</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class=" w-full flex-1 overflow-y-auto">
        <Hero />
        <USP />
        <SVP/>
        <ToPricing text='Stop Organising. Get Sailing'/>
      </main>
      <Footer />
    </div>
  )
}
