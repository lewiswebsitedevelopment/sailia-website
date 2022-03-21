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
        <meta name="description" content="Sailia is a complete management platform to help your watersport centre get discovered, get bookings and get growing." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class=" w-full flex-1 overflow-y-auto">
        <div class="mb-56 py-24 max-w-7xl mx-auto container flex flex-col md:flex-row  ">
          <div class="flex flex-col w-full  pt-1 pb-12 px-6">
            <h2 class="mb-6 text-5xl">Let's talk</h2>
            <a class=" pl-1 duration-300  no-underline hover:underline  " href="mailto:george@sailia.co.uk">george@sailia.co.uk</a>
          </div>
        </div>
        <ToPricing text='Stop Organising. Get Sailing' />
      </main>
      <Footer />
    </div>
  )
}
