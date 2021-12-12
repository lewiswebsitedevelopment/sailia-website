
import Image from 'next/image'
import Button from '../../small/button'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function FeatureMain(props) {

    return (
        <div class='bg-white border  border-gray-900/8 rounded-2xl container mx-auto flex flex-col lg:flex-row items-center mt-10 p-5'>
            <div class='w-full lg:w-1/2 lg:pr-6' >
                <h1 class='leading-normal mb-3 text-5xl'>{props.title}</h1>
                {console.log(props.decription)}
                <p class='mb-12'>{props.description}</p>
                <Button 
				    link={props.url}
				    text='Find out more'
			    />
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
  
export default FeatureMain