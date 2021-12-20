import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

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
            <section class="container p-5">
                <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">About us</h1>
                <p>Sailia was founded by three friends with a passion for the water</p>
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col ">
                    {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div> */}
                    <div class='container flex md:w-2/5 md:flex-row flex-col relative aspect-square mx-auto'>
                        <Image
                            loader={myLoader}
                            src="websiteAssets/the-founders.png"
                            alt="The founders"
                            layout='fill'
                            objectFit="contain"
                            placeholder="blur" with animated shimmer blurDataURL
                        />
                    </div>
                    <div class="md:flex-grow md:w-3/5 md:pl-16 flex flex-col ">
                        <p class="mb-8 leading-relaxed">Welcome on board!<br/><br/>

Sailia was born from the founders frustration at software in the watersports industry.  Coming from a teaching and management background we have many years experience of clients struggling to book courses, colleagues finding it hard to see their working hours and managers wasting countless hours trying to wrangle with generic booking systems. 
<br/><br/>
Our vision for Sailia is a complete platform of integrated tools to make running a club or a centre simple.  Take bookings, manage your website and help a client all from within Sailia.   Your clients are greeted by a clean, simple interface that guides them swiftly from discovery to checkout.</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}