import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function SVP() {
    return (

    <div class=" w-full  items-center mt-10 p-4 md:p-8 pt-4 pb-24 ">
        <div class='mx-auto max-w-7xl'>
            <h2 class="mb-4 leading-normal  text-5xl">Simple. Visual. Powerful.</h2>
            <p class="md:w-4/5  " >Sailia makes centre admin effortless. Customers are guided through a clear booking process freeing up your instructors to focus on offering great sessions out on the water.</p>
            <div class="relative w-full md:w-10/12 shadow-xl m-auto mt-16 aspect-video">
                <Image
                    loader={myLoader}
                    src="websiteAssets/home/Whats-On-page-for-Website.png"
                    alt="Highlight image"
                    layout='fill'
                    objectFit="contain"
                    placeholder="blur" with animated shimmer blurDataURL
                />
            </div>
        </div>
    </div>

    )
  }
  
  export default SVP