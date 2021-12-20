import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Footer() {
    return (
        <footer class="footer bg-slate-900 text-white relative pt-10 -t ">
        <div class="max-w-7xl mx-auto container px-5 py-12  flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 pl-4  md:text-left">
            <a class="flex title-font font-medium  md:justify-start ">
                <div class=" w-24  my-auto relative aspect-video">
                  <Image
                        loader={myLoader}
                        src= "websiteAssets/footer/Footer Logo.svg"
                        alt="Sailia logo"
                        layout='fill'
                        objectFit="contain"
                        placeholder="blur" with animated shimmer blurDataURL
                    />
                </div>
              {/* <span class="ml-3 text-xl">Sailia</span> */}
            </a>
            <p class=" text-sm">Make waves</p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 ">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium  tracking-widest text-sm mb-3">Sailia help</h2>
              <nav class="list-none mb-10">
                <li>
                  <a href='https://docs.sailia.co.uk' target="blank" class="hover:text-gray-400 hover:underline">Documentation</a>
                </li>
                <li>
                  <a href='https://docs.sailia.co.uk' class="hover:text-gray-400 hover:underline">Help center</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium tracking-widest text-sm mb-3">Policies</h2>
              <nav class="list-none mb-10">
                <li>
                    <Link href="/policies/cookie">
                        <a class="hover:text-gray-400 hover:underline">Cookie</a>
                    </Link>
                </li>
                <li>
                  <a class="hover:text-gray-400 hover:underline">Privacy</a>
                </li>
                <li>
                  <a class="hover:text-gray-400 hover:underline">Acceptable use</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-custom-700 ">
          <div class="max-w-7xl mx-auto container py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© {(new Date().getFullYear())} Sailia Limited </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer