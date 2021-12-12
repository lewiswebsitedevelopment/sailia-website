import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function USP() {
    return (

		<div class="bg-white border border-gray-900/8 rounded-2xl container mx-auto items-center mt-10 p-8 pt-4">
			<h2 class="mx-auto leading-normal md:text-center mb-10 text-5xl">Watersport's Only Complete Digital Platform</h2>
      {/* <p>Discovery, booking, management, staff, compliance. All in one place.</p> */}
      <div class="flex m-auto w-full flex-wrap">
      <div class="p-3 w-full md:w-2/4 lg:w-1/4">
        <div class="flex rounded-lg border-2 border-gray-300 h-full p-5 xlg:p-8 flex-col">
          <svg class="h-20 w-20 mb-2 stroke-custom-900 fill-custom-700 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.62 25.99"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_724" data-name="Group 724"><path id="Path_2125" data-name="Path 2125" class="cls-1" d="M.88,10.61,10.61.88a1.27,1.27,0,0,1,1.82,0l9.31,9.31a1.3,1.3,0,0,1,.38.91V24.21a1.28,1.28,0,0,1-1.28,1.28H1.78A1.28,1.28,0,0,1,.5,24.21h0V11.52A1.3,1.3,0,0,1,.88,10.61Z"/><rect id="Rectangle_768" data-name="Rectangle 768" class="cls-1" x="7.12" y="15.03" width="8.37" height="10.46" rx="2"/><rect id="Rectangle_769" data-name="Rectangle 769" class="cls-1" x="7.12" y="7.85" width="8.37" height="3.56" rx="1"/></g></g></g></svg>
          <div class="flex-grow">
            <p class="text-2xl h-1/2 md:h-3/4 xlg:h-3/5">Centre shopfront</p>
            <a class="mt-3 hover:cursor-pointer group text-custom-800 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-3 w-full md:w-2/4 lg:w-1/4">
        <div class="flex rounded-lg border-2 border-gray-300 h-full p-5 xlg:p-8 flex-col">
          <svg class="h-20 w-20 mb-2 stroke-custom-900 fill-custom-700 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.62 25.99"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_724" data-name="Group 724"><path id="Path_2125" data-name="Path 2125" class="cls-1" d="M.88,10.61,10.61.88a1.27,1.27,0,0,1,1.82,0l9.31,9.31a1.3,1.3,0,0,1,.38.91V24.21a1.28,1.28,0,0,1-1.28,1.28H1.78A1.28,1.28,0,0,1,.5,24.21h0V11.52A1.3,1.3,0,0,1,.88,10.61Z"/><rect id="Rectangle_768" data-name="Rectangle 768" class="cls-1" x="7.12" y="15.03" width="8.37" height="10.46" rx="2"/><rect id="Rectangle_769" data-name="Rectangle 769" class="cls-1" x="7.12" y="7.85" width="8.37" height="3.56" rx="1"/></g></g></g></svg>
          <div class="flex-grow">
            <p class="text-2xl h-1/2 md:h-3/4 xlg:h-3/5">Management console</p>
            <a class="mt-3 hover:cursor-pointer group text-custom-800 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        </div>
        <div class="p-3 w-full md:w-2/4 lg:w-1/4">
          <div class="flex rounded-lg border-2 border-gray-300 h-full p-5 xlg:p-8 flex-col">
            <svg class="h-20 w-20 mb-2 stroke-custom-900 fill-custom-700 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.62 25.99"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_724" data-name="Group 724"><path id="Path_2125" data-name="Path 2125" class="cls-1" d="M.88,10.61,10.61.88a1.27,1.27,0,0,1,1.82,0l9.31,9.31a1.3,1.3,0,0,1,.38.91V24.21a1.28,1.28,0,0,1-1.28,1.28H1.78A1.28,1.28,0,0,1,.5,24.21h0V11.52A1.3,1.3,0,0,1,.88,10.61Z"/><rect id="Rectangle_768" data-name="Rectangle 768" class="cls-1" x="7.12" y="15.03" width="8.37" height="10.46" rx="2"/><rect id="Rectangle_769" data-name="Rectangle 769" class="cls-1" x="7.12" y="7.85" width="8.37" height="3.56" rx="1"/></g></g></g></svg>
            <div class="flex-grow">
              <p class="text-2xl h-1/2 md:h-3/4 xlg:h-3/5">Integrated booking system</p>
              <a class="mt-3 hover:cursor-pointer group text-custom-800 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            </div>
          </div>
        </div>
        <div class="p-3 w-full md:w-2/4 lg:w-1/4">
          <div class="flex rounded-lg border-2 border-gray-300 h-full p-5 xlg:p-8 flex-col">
            <svg class="h-20 w-20 mb-2 stroke-custom-900 fill-custom-700 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.62 25.99"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_724" data-name="Group 724"><path id="Path_2125" data-name="Path 2125" class="cls-1" d="M.88,10.61,10.61.88a1.27,1.27,0,0,1,1.82,0l9.31,9.31a1.3,1.3,0,0,1,.38.91V24.21a1.28,1.28,0,0,1-1.28,1.28H1.78A1.28,1.28,0,0,1,.5,24.21h0V11.52A1.3,1.3,0,0,1,.88,10.61Z"/><rect id="Rectangle_768" data-name="Rectangle 768" class="cls-1" x="7.12" y="15.03" width="8.37" height="10.46" rx="2"/><rect id="Rectangle_769" data-name="Rectangle 769" class="cls-1" x="7.12" y="7.85" width="8.37" height="3.56" rx="1"/></g></g></g></svg>
            <div class="flex-grow">
              <p class="text-2xl h-1/2 md:h-3/4 xlg:h-3/5">Integrated shop</p>
              <a class="mt-3 hover:cursor-pointer group text-custom-800 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="group-hover:translate-x-4 duration-300 w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            </div>
          </div>
        </div>
		  </div>
    </div>

    )
  }
  
  export default USP