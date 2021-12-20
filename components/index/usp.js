import Image from 'next/image'
import Link from 'next/link'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function USP() {
    return (

		<div class=" p-8  bg-custom-800">
      <div class='container max-w-7xl text-white mx-auto items-center pb-12 pt-8 '>
        <h2 class="leading-normal mb-3 text-5xl">All the tools you need</h2>
        <p class='mb-10'>Discovery, booking, management, staff, compliance. All in one place.</p>
        <div class="flex justify-justify-center flex-wrap w-min md:w-full">
          <div class="p-3 w-4/5 md:w-2/4 lg:w-1/4">
            <div class="flex rounded-lg h-full p-5 xlg:p-8 flex-col">
              <div class=" w-28 mb-4 relative aspect-square">
                <Image
                  loader={myLoader}
                  src="websiteAssets/home/Centre-Shopfront.svg"
                  alt="Shopfront"
                  layout='fill'
                  objectFit="contain"
                  placeholder="blur" with animated shimmer blurDataURL
                />
              </div>
              <div class="flex-grow">
                <p class="text-xl h-1/2 md:h-3/4 xlg:h-3/5">Centre shopfront</p>
                <Link href="/features/Management">
                  <a class="mt-3 hover:cursor-pointer group text-medium inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-5 h-5 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div class="p-3 w-4/5 md:w-2/4 lg:w-1/4">
            <div class="flex rounded-lg h-full p-5 xlg:p-8 flex-col ">
              <div class=" -mt-2  w-32 h-28 mb-6 relative ">
                <Image
                  loader={myLoader}
                  src="websiteAssets/home/Management-Console.svg"
                  alt="Console"
                  layout='fill'
                  objectFit="contain"
                  placeholder="blur" with animated shimmer blurDataURL
                />
              </div>
              <div class="flex-grow">
                <p class="text-xl h-1/2 md:h-3/4 xlg:h-3/5">Management Console</p>
                <Link href="/features/Management">
                  <a class="mt-3 hover:cursor-pointer group text-medium inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-5 h-5 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div class="p-3 w-4/5 md:w-2/4 lg:w-1/4">
            <div class="flex rounded-lg h-full p-5 xlg:p-8 flex-col ">
              <div class=" w-32 h-20 mb-12 relative ">
                <Image
                  loader={myLoader}
                  src="websiteAssets/home/Integrated-Booking-System.svg"
                  alt="Console"
                  layout='fill'
                  objectFit="contain"
                  placeholder="blur" with animated shimmer blurDataURL
                />
              </div>
              <div class="flex-grow">
                <p class="text-xl h-1/2 md:h-3/4 xlg:h-3/5">Integrated Booking System</p>
                <Link href="/features/Management">
                  <a class="mt-3 hover:cursor-pointer group text-medium inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-5 h-5 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div class="p-3 w-4/5 md:w-2/4 lg:w-1/4">
            <div class="flex rounded-lg h-full p-5 xlg:p-8 flex-col ">
              <div class=" w-14 h-20 mb-12 relative ">
                <Image
                  loader={myLoader}
                  src="websiteAssets/header/Shop.svg"
                  alt="Console"
                  layout='fill'
                  objectFit="contain"
                  placeholder="blur" with animated shimmer blurDataURL
                />
              </div>
              <div class="flex-grow">
                <p class="text-xl h-1/2 md:h-3/4 xlg:h-3/5">Online shop</p>
                <Link href="/features/Management">
                  <a class="mt-3 hover:cursor-pointer group text-medium inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-5 h-5 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
  }
  
  export default USP