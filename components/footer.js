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
              <a class="ml-3 text-gray-500" fill="currentColor" href="mailto:george@sailia.co.uk" target='blank'>
              <svg class="w-5 h-5 text-gray-500 stroke-gray-500" xmlns="http://www.w3.org/2000/svg"  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"  viewBox="0 0 24 24" viewBox="0 0 256 256" >
                <g transform="translate(128 128) scale(0.72 0.72)" >
                    <g  transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
                      <path d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                      <path d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                      <path d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                      <path d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                      <path d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
                    </g>
                  </g>
                </svg>
              </a>
              <a class="ml-3 text-gray-500" href='https://www.instagram.com/sailiabooking/?hl=en-gb' target='blank'>
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