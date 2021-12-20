import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Card from '../../components/features/feature'
import MainCard from '../../components/features/featureMain'
import Button from '../../components/small/button'
import ToPricing from '../../components/small/directToPricing'

const myLoader = ({ src, width, quality }) => {
  return `https://s3.sailia.co.uk/websiteAssets/${src}`
}

const Post = () => {
  const router = useRouter()
  const { feature } = router.query
  const features =  {
    "Online": {
      "icon": "header/globe.svg",
      "name": "Online Precence",
      "title":"Find your space on the internet",
      "description": "Easily Establish your centre online with Sailia's pre-built template blocks.",
      "image": "features/Online/Group 1949.png",
      "pricingText" :"Grow your business online",
      "features": [
        {
          "name": "Focus on the content",
          "description": "With our templates and drag and drop builder, all you need to worry about is your content. The design is taken care of.",
          "image": "features/Online/Focus on the Content.svg"
        },
        {
          "name": "Easy Maintainance",
          "description": "As a hosted solution on AWS we will ensure your site has 99.9% uptime and won't suddenly break on you",
          "image": "features/Online/Easy Maintainance.svg"
        },
        {
          "name": "Brand Customisation",
          "description": "Customise the colours and logos to match your brand",
          "image": "features/Online/Brand Customisation.svg"
        },
        {
          "name": "Always Secure",
          "description": "Let us take care of keeping your website secure.",
          "image": "features/Online/Always Secure.svg"
        }
      ],
    "aspects": [
        {
          "name": "Build your website from beautiful templates",
          "description": "Sailia's website builder comes with an array of beautiful templates and your site will be fully integrated into the platform. No need to worry about booking platform integrations ever again.",
          "image": "features/Online/Group 1904.png",
          "bg": 1
        },
        {
          "name": "Drag and drop pre-built website blocks",
          "description": "Edit your site with easy to use drag and drop sections so you can customise your site exactly as your wish.",
          "image": "features/Online/Group 1905.png",
          "bg": 0
        },
        {
          "name": "Built in analytics to help you scale",
          "description": "Crucial Insights are summarised to help your centre grow and acquire more customers.",
          "image": "features/Online/Group 1977.png",
          "bg": 1
        }
      ]
    },
    "Shop": {
      "icon": "header/Booking.svg",
      "name": "Shop",
      "title":"Sell Anything",
      "description": "Sell kit old or new direct to customers through an integrated shop.",
      "image": "features/Shop/Shop With Side Bar Real.png",
      "pricingText" :"Sell with Sailia",
      "features": [
        {
          "name": "Integrated into Sailia",
          "description": "Our shop is fully integrated into Sailia meaning you can sell anything from discount cards and memberships that can be attached to your profile, to your kit at the end of the season.",
          "image": "features/Shop/Integrated into sailia.svg"
        },
        {
          "name": "Low Base transaction",
          "description": "Starting at 2.5% our transaction rate is by far the lowest of any online marketplace.",
          "image": "features/Shop/Low Base Transaction.svg"
        },
        {
          "name": "Included with all plans",
          "description": "Whether you're on the free or helm plan you will have access to our shop.",
          "image": "features/Shop/Included with all plans.svg"
        },
        {
          "name": "Inventory Management",
          "description": "Our shop seamlessly integrates with the admin dashboard to allow you to add stock within seconds.",
          "image": "features/Shop/Inventory Management.svg"
        }
      ],
      "aspects": [
        {
          "name": "Sell used kit at the end of the season",
          "description": "Generate additional revenue on old kit that is to be replaced or create a thriving online watersports shop alongside your sessions.",
          "image": "features/Shop/Group 1978.png",
          "bg": 1
        },
        {
          "name": "Sell Memberships",
          "description": "Create customer loyalty with centre memberships. They are completely customisable and can be sold through your online shop.",
          "image": "features/Shop/Group 327.png",
          "bg": 0
        },
        {
          "name": "In built analytics to help your sales grow",
          "description": "Crucial Insights are summarised across the shop dashboard alongside key information to help your sales figures to grow.",
          "image": "features/Shop/Group 1890.png",
          "bg": 1
        }
      ]
    },
    "Compliance": {
      "icon": "header/Booking.svg",
      "name": "Compliance",
      "title":"Always compliant. Every. Single. Time.",
      "description": "Sailia ensures your centre ticks all legal boxes when taking bookings as well as keeping you aligned with RYA rules or other governing bodies.",
      "image": "features/Compliance/Group 1974.png",
      "pricingText" :"Get Compliant. Get Sailia.",
      "features": [
        {
          "name": "RYA Compliance",
          "description": "Sailia is built for RYA compliance. Never worry about missing the mark.",
          "image": "features/Compliance/RYA Logo.svg"
        },
        {
          "name": "RYA Course Templates",
          "description": "Create sessions based off built in RYA course templates that mean you never miss a course requirement.",
          "image": "features/Compliance/Session Templates (1).svg"
        },
        {
          "name": "Built in Qualifications",
          "description": "Assign qualifications to clients and staff from a built in governing body library.",
          "image": "features/Compliance/Qualifications_1.svg"
        },
        {
          "name": "Professional Body Ready",
          "description": "Sailia supports qualifications, courses and compliance from a range of professional bodies including British canoeing, surfing England and British kitesports.",
          "image": "features/Compliance/Professional Body Ready.svg"
        }
      ],
      "aspects": [
        {
          "name": "Upload your Terms and Conditions",
          "description": "Make sure your terms and conditions are always in order and edit them easily in the forms section of the platform.",
          "image": "features/Compliance/Group 1895.png",
          "bg": 1
        },
        {
          "name": "Custom Medical Declaration",
          "description": "Quickly Create medical declarations that are specific to where you are operating from. This information will be stored as part of a clients profile so once the admin is done it is done.",
          "image": "features/Compliance/Group 1975.png",
          "bg": 0
        },
        {
          "name": "Cater to special Requirements",
          "description": "Make sure your centre can cater to a clients requirements. Be they relating to accessibility, learning disabilities or other requirements, clients can document these clearly in their profile.",
          "image": "features/Compliance/Group 1976.png",
          "bg": 1
        }
      ]
    },
    "Booking": {
      "icon": "header/Booking.svg",
      "name": "Bookings",
      "title":"Bookings. All in one place",
      "description": "Keep all your bookings ordered and tidy.",
      "image": "features/Booking/Booking-Main.png",
      "pricingText" :"Automate Your bookings with Sailia",
      "features": [
        {
          "name": "Swift Booking Process",
          "description": "Our No fuss booking process takes just minutes. Find a session, choose a time, select who's coming and off we go!",
          "image": "features/Booking/Swift Booking Process.svg"
        },
        {
          "name": "Client Management",
          "description": "Access your clients any time. See their bookings, details and family account members.",
          "image": "features/Booking/Client Management.svg"
        },
        {
          "name": "Elastic hire",
          "description": "Enable kit hire to allow clients to select how long they wish to hire kit for. You can provision kit, or it can provision itself!",
          "image": "features/Booking/Private Kit Hire.svg"
        },
        {
          "name": "Private Sessions",
          "description": "Does a client have special requirements or just wants a bit extra attention? Private sessions can be booked without even picking up the phone!",
          "image": "features/Booking/Private Sessions.svg"
        }
      ],
      "aspects": [
        {
          "name": "Help your clients find the right session.",
          "description": "The Book page allows clients to find the session they're looking for or discover something new. Search by location, qualifications, acitivity type or staff.",
          "image": "features/Booking/Group 1884.png",
          "bg": 1
        },
        {
          "name": "Easy Booking Management",
          "description": "Clients can easily manage bookings from within their profile without assistance from you. Clients can easily chat with their instructor or fill out requested info with ease.",
          "image": "features/Booking/Profile – Real – 1.png",
          "bg": 0
        },
        {
          "name": "Assign Kit for Hire",
          "description": "Sailia allows you to offer kit for hire and ensures this will not affect your planned sessions. ",
          "image": "features/Booking/Hire Kit.png",
          "bg": 1
        }
      ]
    },
    "Management": {
      "icon": "header/Management.svg",
      "name": "Management",
      "title":"Management made simple",
      "description": "Get a bird’s eye view of centre life. Get a clear picture of all sessions occurring on any given day across all your locations.",
      "image": "features/Management/Dashboard-Home.png",
      "pricingText" :"Get Admin Sorted. Get Sailia",
      "features": [
        {
          "name": "Multiple Locations",
          "description": "Does your centre operate from multiple locations? No problem. Assign kit to various locations and manage all from within one page.",
          "image": "features/Management/Multiple-Locations.svg"
        },
        {
          "name": "Kit Management",
          "description": "Sailia ensures you never double book a piece of kit. Get the most out of your kit while making sure it'll be available when its needed.",
          "image": "features/Management/Kit-managment.svg"
        },
        {
          "name": "Session Templates",
          "description": "Speed up planning for the season with session templates. Write once, book many.",
          "image": "features/Management/Session-Templates.svg"
        },
        {
          "name": "Staff management",
          "description": "Sailia's people management system allows you to set what your staff can see, check when they are free and allocate them to sessions",
          "image": "features/Management/Instructor-Availibility.svg"
        }
      ],
      "aspects": [
        {
          "name": "The Daily Schedule. Updated with a Click.",
          "description": "The What's On page gives you a complete view of all sessions occurring across all locations on any given day.",
          "image": "features/Management/Whats-on-Page-small-version.png",
          "bg": 1
        },
        {
          "name": "Session information for everyone",
          "description": "Get all your staff on the same page. Session summaries can be accessed by both instructors and managers alike ensuring the right kit and the right people are where they need to be, when they need to be.",
          "image": "features/Management/whats-on-popup.png",
          "bg": 0
        },
        {
          "name": "Insights Instantly Accessible",
          "description": "Crucial Insights are summarised across the Administrators Dashboard alongside key information to help you plan effectively. No need to generate reports, view all data instantly.",
          "image": "features/Management/Management.png",
          "bg": 1
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
      <main>
        <div class=" container  flex-1 overflow-y-auto p-5 max-w-7xl mx-auto">
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
            <div class=" rounded-3xl ml-8 h-[27rem] relative aspect-video">
                <Image
                  className="rounded-3xl"
                    loader={myLoader}
                    src={features[feature]?.image}
                    alt="Wheel"
                    layout='fill'
                    objectFit="contain"
                    placeholder="blur" with animated shimmer blurDataURL
                />
            </div>
          </div>
        </div>
        <div  class="container  flex-1 overflow-y-auto p-5 max-w-7xl mx-auto flex mt-16 justify-justify-center flex-wrap  md:w-full">
          {features[feature]?.features.map(item => <Card name={item.name} bg={item.bg} description={item.description} image={item.image} />)}
        </div>
        {features[feature]?.aspects.map(item => 
          <MainCard 
          name={item.name} 
          bg={item.bg} 
          description={item.description} 
          image={item.image} 
          
        />)}
      <ToPricing text={features[feature]?.pricingText}/>
      </main>
      <Footer />
    </div>
  
  )
}

export default Post