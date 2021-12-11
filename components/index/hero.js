import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Hero() {
    return (
    <div class="bg-white rounded-2xl container mx-auto flex flex-col md:flex-row items-center mt-10 p-5">

		<div class="flex flex-col w-full lg:w-3/5 justify-center items-start pt-1 pb-24 px-6">
			<h3 class="leading-normal mb-3 text-5xl">
                The first online marketplace that connects people to watersports centres.
            </h3>
            <p class='leading-normal mb-6'>Sailia is a complete management platform to help your centre get discovered, get bookings and get going.</p>
			<button class="bg-transparent hover:bg-gray-900 duration-300 text-gray-900 hover:text-white rounded-full  hover:shadow-lg py-1 px-7 border border-gray-900 hover:border-transparent">Find out more</button>
		</div>
		
		<div class="w-full lg:w-1/2  text-center">
			
			<svg class="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
			</svg>
		</div>

	</div>

    )
  }
  
  export default Hero