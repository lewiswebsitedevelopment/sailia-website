import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Hero() {
    return (

		<div class="bg-white border border-gray-900/8 rounded-2xl mt-10 p-5 ">
			<h2 class="mx-auto leading-normal text-center mb-3 text-5xl">
                Watersport's Only Complete Digital Platform
      </h2>
      <div class="m-auto flex ">
        <div class="grid-rows-2 grid">
          <p>Centre search and discovery</p>
          <svg class="h-12 w-12 stroke-cyan-500 fill-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.62 25.99"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_724" data-name="Group 724"><path id="Path_2125" data-name="Path 2125" class="cls-1" d="M.88,10.61,10.61.88a1.27,1.27,0,0,1,1.82,0l9.31,9.31a1.3,1.3,0,0,1,.38.91V24.21a1.28,1.28,0,0,1-1.28,1.28H1.78A1.28,1.28,0,0,1,.5,24.21h0V11.52A1.3,1.3,0,0,1,.88,10.61Z"/><rect id="Rectangle_768" data-name="Rectangle 768" class="cls-1" x="7.12" y="15.03" width="8.37" height="10.46" rx="2"/><rect id="Rectangle_769" data-name="Rectangle 769" class="cls-1" x="7.12" y="7.85" width="8.37" height="3.56" rx="1"/></g></g></g></svg>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
		</div>

    )
  }
  
  export default Hero