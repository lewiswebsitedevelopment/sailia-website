import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/index/hero'
import USP from '../components/index/usp'
import SVP from '../components/index/svp'
import SetSail from '../components/index/setSail'

export default function Home() {
  return (
    <div class="font-montserrat text-text-900">
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        <main class="flex-1 overflow-y-auto max-w-7xl mx-auto ">
            <section class="text-gray-600 body-font">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About us</h1>
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p class="mb-8 leading-relaxed">The three of us grew up in Eastbourne and Bexhill, Seaside towns on the south coast of England. Jake and George found a passion early on for sailing. Qualifying as Instructors, we worked the summer season throughout our school years at our local water sports school. <br class='mb-5'/>The software the school used was virtually impossible to use. It always frustrated us how difficult it was to see our working hours or even know what session we were supposed to be teaching. It was old and outdated, rarely updated, and totally unintuitive for our clients to book onto sessions. <br class='mb-5'/> Exasperated, our boss, knowing our interest in programming suggested building a better system custom made for the centre. Having been at school together with George and Jake, James, a Designer and passionate swimmer, was brought onboard and work commenced in earnest. <br class='mb-5'/> Looking around early on, we realised that many systems out there are simply not fit for purpose and don’t offer the clear, easy, experience that clients so desperately wanted. <br class='mb-5'/>Sailia is our solution. A clean user-friendly interface means booking is no longer any trouble and managers can stop spending hours staring and get out there on the water! We have big plans so come aboard with us for the ride! <br class='mb-5'/>All the best!<br class='mb-5'/> George, James and Jake</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}