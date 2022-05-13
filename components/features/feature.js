
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/websiteAssets/${src}`
}

function FeatureChild(props) {

    return (
          <div class="md:p-3 md:py-0 py-4 w-4/5 w-full sm:w-2/4 lg:w-1/4">
            <div class="flex rounded-lg h-full md:p-5 xlg:p-8 flex-col">
              <div class="w-24 mb-4 relative aspect-square">
                <Image
                  loader={myLoader}
                  src={props.image}
                  alt="Shopfront"
                  layout='fill'
                  objectFit="contain"
                  placeholder="blur" with animated shimmer blurDataURL
                />
              </div>
              <div class="flex-grow">
                <p class="text-xl mb-4">{props.name}</p>
                <p>{props.description}</p>
              </div>
            </div>
          </div>

    )
  }
  
export default FeatureChild