import Button from './button'

function ToPricing(props) {

    return (
        <div class="bg-custom-600">
        <div class="py-24 max-w-7xl mx-auto container  flex flex-col md:flex-row items-center ">
          <div class="flex flex-col w-full  justify-center items-start pt-1 pb-12 px-6">
            <h2 class="leading-normal mb-6 text-5xl">{props.text}</h2>
              <Button 
                link='/pricing'
                text='See plans'
              />
          </div>
        </div>
        </div>

    )
  }
  
export default ToPricing