import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/features/parent/featureMain'

export default function Features() {
  const features =  [
    {
      title:'Management made simple',
      description:"Sailia's search function puts your centre in the spotlight. Clients can easily search by sport, location, level or date.",
      url:'/features/Admin'
    },
    {
      title:'Bookings. All in one place',
      description:"Ability to create bookings, templates, create custom questions and add ons",
      url:"/features/Booking"
    },
    {
      title:'Always Compliant. Every. Single. Time',
      description:"Talk about how interwoven the system is with the RYA",
      url:"/features/booking"
    },
    {
      title:'Find your space on the internet',
      description:"Talk about the shopfront feature",
      url:"/features/booking"
    },
    {
      title:'Sell anything',
      description:"Talk about the inbuilt shop feature",
      url:"/features/booking"
    },
  ]
  var arr = [];
  Object.keys(features).forEach(function(key) {
    arr.push(features[key]);
  });
  return (
    <div class="font-montserrat text-text-900">
      <Head>
        <title>Features</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class="flex-1 overflow-y-auto py-5 pt-0 max-w-7xl mx-auto">
        {arr.map(item => <Card title={item.title} description={item.description} url={item.url} />)}
      </main>
      <Footer />
    </div>
  )
}
