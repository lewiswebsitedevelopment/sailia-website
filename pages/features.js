import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Features() {
  return (
    <div class="font-montserrat text-text-900">
      <Head>
        <title>Sailia</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class="flex-1 overflow-y-auto p-5 max-w-7xl mx-auto">
        Features
      </main>
      <Footer />
    </div>
  )
}
