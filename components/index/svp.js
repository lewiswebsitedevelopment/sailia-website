import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function SVP() {
    return (

    <div class="bg-white border border-gray-900/8 rounded-2xl container mx-auto items-center mt-10 p-8 pt-4">
        <h2 class="mx-auto leading-normal md:text-center text-5xl">Simple. Visual. Powerful.</h2>
        <p class="md:w-4/5 md:text-center md:m-auto text-slate-500" >Sailia makes centre admin effortless. Customers are guided through a clear booking process freeing up your instructors to focus on offering great sessions out on the water.</p>
        <div class="relative w-[95%] m-auto mt-6 aspect-video">
            <Image
                loader={myLoader}
                src="websiteAssets/svp.png"
                alt="Highlight image"
                layout='fill'
                objectFit="contain"
                placeholder="blur" with animated shimmer blurDataURL
            />
        </div>
    </div>

    )
  }
  
  export default SVP