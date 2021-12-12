import Button from '../small/button'

function Sail() {
    return (
    <div class="max-w-7xl mx-auto container  flex flex-col md:flex-row items-center mt-10 p-5">

		<div class="flex flex-col w-full lg:w-3/5 justify-center items-start pt-1 pb-12 px-6">
			<h2 class="leading-normal mb-3 text-5xl">
                Ready to set sail?
            </h2>
            <Button 
				link='/pricing'
				text='See plans'
			/>
        </div>

	</div>

    )
  }
  
  export default Sail