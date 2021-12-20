import Button from '../small/button'

function Sail() {
    return (
    <div class="bg-custom-600">
      <div class="py-24 max-w-7xl mx-auto container  flex flex-col md:flex-row items-center mt-10 p-5">
        <div class="flex flex-col w-full lg:w-3/5 justify-center items-start pt-1 pb-12 px-6">
          <h2 class="leading-normal mb-3 text-5xl">Stop Organising. Get Sailing</h2>
            <Button 
              link='/pricing'
              text='See plans'
            />
        </div>
      </div>
	  </div>

    )
  }
  
  export default Sail