
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function FeatureChild(props) {

    return (
        <div class='mx-auto flex flex-col lg:flex-row items-center mb-10'>
            <div class='w-full lg:w-1/2 lg:pr-6' >
                <h1 class='leading-normal mb-3 text-3xl'>{props.title}</h1>
                <p class='w-9/12 mb-12'>{props.description}</p>
            </div>
            <div class='relative lg:w-1/2 w-full m-auto mt-6 aspect-video'>
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
  
export default FeatureChild