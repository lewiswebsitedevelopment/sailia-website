import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Hero() {
    return (

		<div class="bg-white rounded-2xl flex flex-col w-full justify-center items-start mt-10 p-5 ">
			<h2 class="mx-auto leading-normal mb-3 text-5xl">
                Watersport's Only Complete Digital Platform
            </h2>
            <p class='leading-normal mb-6'>Sailia is a complete management platform to help your centre get discovered, get bookings and get going.</p>
			<button class="bg-transparent hover:bg-gray-900 duration-300 text-gray-900 hover:text-white rounded-full  hover:shadow-lg py-1 px-7 border border-gray-900 hover:border-transparent">Find out more</button>
		</div>

    )
  }
  
  export default Hero