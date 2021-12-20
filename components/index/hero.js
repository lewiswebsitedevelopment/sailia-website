import Image from 'next/image'
import Button from '../small/button'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Hero() {
    return (
    <div class=" max-w-7xl mx-auto  container flex flex-col md:flex-row items-center pb-5">

		<div class="flex flex-col lg:w-2/4 justify-center items-start pt-1 pb-24 px-6">
			<h3 class="md:leading-normal leading-tight mb-3 text-5xl">
                Your Watersports centre’s Digital Partner
            </h3>
            <p class='leading-normal mb-6'>Sailia is a complete management platform to help your centre get discovered, get bookings and get growing.</p>
			<Button 
				link='/features'
				text='Find out more'
			/>
		</div>
		<div class="relative lg:w-2/4 h-[30rem] m-auto mt-6 aspect-square">
			<Image
				loader={myLoader}
				src="websiteAssets/home/Isometric-Hero-Illustration.png"
				alt="Highlight image"
				layout='fill'
				objectFit="contain"
				placeholder="blur" with animated shimmer blurDataURL
			/>
		</div>

	</div>

    )
  }
  
  export default Hero