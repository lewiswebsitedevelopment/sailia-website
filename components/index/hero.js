import Image from 'next/image'
import Button from '../small/button'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Hero() {
    return (
    <div class="bg-white border  border-gray-900/8 rounded-2xl container mx-auto flex flex-col md:flex-row items-center p-5">

		<div class="flex flex-col w-full lg:w-3/5 justify-center items-start pt-1 pb-24 px-6">
			<h3 class="md:leading-normal leading-tight mb-3 text-5xl">
                The first online marketplace that connects people to watersports centres.
            </h3>
            <p class='leading-normal mb-6'>Sailia is a complete management platform to help your centre get discovered, get bookings and get going.  Helping you focus on what you do best (this sort of thing?)</p>
			<Button 
				link='/features'
				text='Find out more'
			/>
		</div>
		
		<div class="w-full lg:w-1/2  text-center">
			<Image
				loader={myLoader}
				src="tenantlogo/1Logo.png"
				alt=""
				width={160}
				height={45}
			/>
		</div>

	</div>

    )
  }
  
  export default Hero