import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Header() {
    return (
    <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-white supports-backdrop-blur:bg-white/95">
        <div class="max-w-7xl mx-auto">
            <div class="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0"><div class="relative flex items-center">
                <Link class="hover:text-sky-500" href="/">
                    <a class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto">
                        <Image
                            loader={myLoader}
                            src="tenantlogo/1Logo.png"
                            alt="Picture of the author"
                            width={160}
                            height={45}
                        />
                    </a>
                </Link>
                <nav class="hidden lg:block ml-auto">
                    <ul class="flex space-x-14 text-sm leading-6 font-semibold text-gray-700">
                        <li>
                            <Link href="/features">
                                <a class="hover:text-slate-500 duration-300">Features</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing">
                                <a class="hover:text-slate-500 duration-300">Pricing</a>
                            </Link>
                        </li>
                        <li>
                            <a class="hover:text-sky-500" href="/blog">
                                About
                            </a>
                        </li>
                        <div class="border-solid border border-gray-700"></div>
                        <li>
                            <a class="hover:text-sky-500" href="/blog">
                                Sign up
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    </div>
    )
  }
  
  export default Header