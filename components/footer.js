import Link from 'next/link'

function Footer() {
    return (
        <footer class="mt-24 footer bg-white relative pt-1 border-t border-gray-900/8 ">
            <div class="container mx-auto px-6">

                <div class="sm:flex sm:mt-8 ">
                    <div class="my-3 sm:mt-0 sm:w-full sm:px-8 font-semibold text-gray-700 flex flex-col md:flex-row justify-between">
                        <div class="flex flex-col ">
                            <span class="font-bold text-gray-700 mb-2">Sailia links</span>
                            <span class="my-2"><a target="blank" href="https://lucid-raman-29dac9.netlify.app/" class="hover:text-slate-500 duration-300">Documentation</a></span>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-bold text-gray-700 mt-4 md:mt-0 mb-2">Policies</span>
                            <Link href="/policies/cookie">
                                <a class="hover:text-slate-500 duration-300">Cookie policy</a>
                            </Link>
                            <span class="my-2"><a href="#" class="hover:text-slate-500 duration-300">Privacy policy</a></span>
                        </div>
                        <div class="flex flex-col">
                            {/* <span class="font-bold text-gray-700  mt-4 md:mt-0 mb-2">Footer header 3</span>
                            <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                            <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                            <span class="my-2"><a href="#" class="text-blue-700  text-md hover:text-blue-500">link 1</a></span> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }
  
  export default Footer