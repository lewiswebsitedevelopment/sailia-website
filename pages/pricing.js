import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div class="font-montserrat text-text-900">
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class="rounded-2xl container  flex-1 overflow-y-auto max-w-7xl mx-auto ">

      <section class="body-font overflow-hidden">
        <div class="container px-5 pb-24 mx-auto">
            <div class="flex flex-wrap -m-4 justify-center flex-col">
                <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 ">Our pricing is simple, just like our software</h1>
                    <p class="lg:w-2/3  leading-relaxed text-base ">No hidden fees. 😎</p>
                </div>
                <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
                    <div class="h-full p-6 rounded-lg border bg-white border-custom-800 flex flex-col relative overflow-hidden">
                    {/* <span class="bg-custom-800 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span> */}
                    <h2 class="text-sm tracking-widest title-font mb-1 font-medium"></h2>
                    <h1 class="text-5xl text-gray-900 leading-none flex items-baseline pb-2">
                        <span>Free</span>
                        <span class="text-lg ml-1 font-normal text-gray-500"></span>
                    </h1>
                    {/* <p>We levy a booking fee at checkout</p> */}
                    <p class="pb-4 mb-4 flex flex-col border-b border-gray-200  text-gray-500  text-sm">
                        {/* <span>4% of cash payments invoiced each month</span> */}
                        <span>We just charge a small booking fee for every ticket you sell. You can pay this yourself, or pass it on to your customers. Your choice.</span>
                    </p>
                    <p class='mb-4 text-slate-600'>Includes everything</p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited users
                    </p>
                    
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited bookings
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited locations
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Staff management
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>What's on page
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Memberships
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Granular permissions
                    </p>
                    <p class="flex items-center text-gray-600 mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Discount codes
                    </p>
                    <p class="flex items-center text-gray-600 mb-6">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Standard support
                    </p>
                    <a  href="/contact" class="flex items-center mt-auto text-white bg-custom-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Contact us
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <p class="text-xs text-gray-500 mt-3"></p>
                    </div>
                </div>
            
            </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}