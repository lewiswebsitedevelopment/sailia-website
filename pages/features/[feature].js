import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/features/child/featureChild'
import Button from '../../components/small/button'

const myLoader = ({ src, width, quality }) => {
  return `https://s3.sailia.co.uk/websiteAssets/${src}`
}

const Post = () => {
  const router = useRouter()
  const { feature } = router.query
  const features =  {
    "Admin": {
      title:"Admin made effortless",
      "description": "Management tools",
      "aspects": [
        {
          "title": "Admin console",
          "description": "Get a bird’s eye view of centre life. The admin console lays out a complete summary of sessions on any given day along with a summary of Instructors and clients booked on."
        }, 
        {
          "title": "My rota",
          "description": "Easily see your instructors in a single table. Once Instructors have signed up with a user account, their privileges can easily be changed into instructor and even admin level access."
        },
        {
          "title": "Kit management",
          "description": "Sailia keeps track of your equipment ensuring sessions are booked to take full advantage of your entire inventory. Add any type of kit and assign to session templates."
        }
      ]
    },
    "Booking": {
      "title":"Bookings",
      "description": "On an adventure",
      "aspects": [
        {
          "title": "4 step booking process",
          "description": "Booking with sailia is effortless. 3 clicks and its done. Select the date, select a time on the session you want and confirm the family members attending and you’re done!"
        }, 
        {
          "title": "User accounts",
          "description": "Sailia is organised by family group. Add family or friends to your account to allow quick group bookings and get out there together!"
        },
        {
          "title": "Memberships and qualifications",
          "description": "Centres can offer customisable memberships through sailia giving clients discounts on selected sessions. Completed a course? Add your new qualifications to your account."
        }
      ]
    },
    "Management": {
      "icon": "header/Management.svg",
      "name": "Management",
      "title":"Management made simple",
      "description": "Get a bird’s eye view of centre life. Get a clear picture of all sessions occurring on any given day across all your locations.",
      "image": "/features/Management/Dashboard-Home.png",
      "aspects": [
        {
          "title": "4 step booking process",
          "description": "Booking with sailia is effortless. 3 clicks and its done. Select the date, select a time on the session you want and confirm the family members attending and you’re done!"
        }, 
        {
          "title": "User accounts",
          "description": "Sailia is organised by family group. Add family or friends to your account to allow quick group bookings and get out there together!"
        },
        {
          "title": "Memberships and qualifications",
          "description": "Centres can offer customisable memberships through sailia giving clients discounts on selected sessions. Completed a course? Add your new qualifications to your account."
        }
      ]
    }
  }
  return (
    <div class="font-montserrat text-text-900">
      <Head>
        <title>{feature}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main class=" container  flex-1 overflow-y-auto p-5 max-w-7xl mx-auto">
        <div class='flex'>
          <div class='w-full md:w-4/6'>
            <div class='flex'>
              <div class="h-5 w-5 mr-2 my-auto relative aspect-square">
                  <Image
                      loader={myLoader}
                      src={features[feature]?.icon}
                      alt="Wheel"
                      layout='fill'
                      objectFit="contain"
                      placeholder="blur" with animated shimmer blurDataURL
                  />
              </div>
              <p>{features[feature]?.name}</p>
            </div>
            <h1 class='leading-normal mb-3 text-5xl'>{features[feature]?.title}</h1>
            <p class='mb-12'>{features[feature]?.description}</p>
            <Button 
              link='/pricing'
              text='Start now'
            />
          </div>
          <div class="w-full shadow-lg rounded-3xl ml-12 mr-2 relative aspect-video">
              <Image
                className="rounded-3xl"
                  loader={myLoader}
                  src={features[feature]?.image}
                  alt="Wheel"
                  layout='fill'
                  objectFit="cover"
                  placeholder="blur" with animated shimmer blurDataURL
              />
          </div>
        </div>
        {features[feature]?.aspects.map(item => <Card title={item.title} description={item.description} url='' />)}
        <div>
          All of the other features will be down here
        </div>
      </main>
      <Footer />
    </div>
  
  )
}

export default Post