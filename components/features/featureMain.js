
import Image from 'next/image'
import Button from '../small/button'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/websiteAssets/${src}`
}

function FeatureMain(props) {
		if (!props) {
			return (<div>Error</div>)
		}
    let classesone = 'lg:flex-nowrap flex-wrap container flex-1 flex overflow-y-auto py-24  max-w-7xl mx-auto'
	  let classes = 'text-white bg-custom-800 flex-row-reverse'
    if (props.bg === 1) {
        let classes = 'text-white bg-custom-800 flex-row-reverse'
        classesone = 'lg:flex-nowrap flex-wrap flex-row-reverse container flex-1 flex overflow-y-auto py-24  max-w-7xl mx-auto'
    } 
    return (
        <div class={classes}>
            <div class={classesone}>
                <div class='w-11/12 mx-auto lg:m-0 lg:w-3/4' >
                    <h1 class='leading-normal mb-3 ml-5 text-5xl'>{props.name}</h1>
                    <p class='mb-12 ml-5'>{props.description}</p>
                </div>
                <div class='aspect-video w-full h-80 relative'>
                    <Image
                        loader={myLoader}
                        src={props.image}
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
  
export default FeatureMain