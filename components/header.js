import Link from 'next/link'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}

function Header() {
    return (
    <div class="bg-white mb-10 px-5 sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 md:z-50 border-b border-gray-900/8 supports-backdrop-blur:bg-white/95">
        <div class="max-w-7xl mx-auto">
            <div class="py-2 mx-4 md:mx-0">
                <div class="relative flex items-center">
                    <Link class="hover:text-sky-500" href="/">
                        <a class="flex-none w-[7.0625rem] relative mr-3 aspect-video">
                            <Image
                                loader={myLoader}
                                src="tenantlogo/1Logo.png"
                                alt="Sailia logo"
                                layout='fill'
                                objectFit="contain"
                                eager
                                placeholder="blur" with animated shimmer blurDataURL
                            />
                        </a>
                    </Link>
                    <nav class="hidden md:block ml-auto">
                        <ul class="flex space-x-14 text-sm leading-6 font-semibold">
                            <li class='cursor-pointer has-tooltip'>
                                    <a class=" hover:text-slate-500">
                                        <span class='w-max tooltip grid rounded-2xl shadow-lg -translate-x-1/2  bg-white grid-cols-3 p-8 gap-x-10 gap-y-8 -mt-[-1.5rem]'>
                                            <div class='flex w-max h-max'>
                                                <div class="h-9 w-9 m-auto relative aspect-square">
                                                    <Image
                                                        loader={myLoader}
                                                        src="websiteAssets/header/Management.svg"
                                                        alt="Wheel"
                                                        layout='fill'
                                                        objectFit="contain"
                                                        placeholder="blur" with animated shimmer blurDataURL
                                                    />
                                                </div>
                                                <Link href="/features/Management">
                                                    <a class="h-full pl-3 text-custom-900 hover:text-slate-500">
                                                        <p >Management</p>
                                                        <p class='font-light'>Get in control</p>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div class='flex w-max h-max'>
                                                <div class="h-9 w-9 m-auto relative aspect-square">
                                                    <Image
                                                        loader={myLoader}
                                                        src="websiteAssets/header/Booking.svg"
                                                        alt="Wheel"
                                                        layout='fill'
                                                        objectFit="contain"
                                                        placeholder="blur" with animated shimmer blurDataURL
                                                    />
                                                </div>
                                                <Link href="/features/Booking">
                                                    <a class="h-full pl-3 text-custom-900 hover:text-slate-500">
                                                        <p >Booking</p>
                                                        <p class='font-light'>All in one place</p>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div class='flex w-max h-max'>
                                                <div class="h-9 w-9 m-auto relative aspect-square">
                                                    <Image
                                                        loader={myLoader}
                                                        src="websiteAssets/header/globe.svg"
                                                        alt="Wheel"
                                                        layout='fill'
                                                        objectFit="contain"
                                                        placeholder="blur" with animated shimmer blurDataURL
                                                    />
                                                </div>
                                                <Link href="/features/Online">
                                                    <a class="h-full pl-3 text-custom-900 hover:text-slate-500">
                                                        <p >Online Precence</p>
                                                        <p class='font-light'>Get discovered</p>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div class='flex w-max h-max'>
                                                <div class="h-9 w-9 m-auto relative aspect-square">
                                                    <Image
                                                        loader={myLoader}
                                                        src="websiteAssets/header/Shop.svg"
                                                        alt="Wheel"
                                                        layout='fill'
                                                        objectFit="contain"
                                                        placeholder="blur" with animated shimmer blurDataURL
                                                    />
                                                </div>
                                                <Link href="/features/Booking">
                                                    <a class="h-full pl-3 text-custom-900 hover:text-slate-500">
                                                        <p >Shop</p>
                                                        <p class='font-light'>Sell anything</p>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div class='flex w-max h-max'>
                                                <div class="h-9 w-9 m-auto relative aspect-square">
                                                    <Image
                                                        loader={myLoader}
                                                        src="websiteAssets/header/Compliance.svg"
                                                        alt="Wheel"
                                                        layout='fill'
                                                        objectFit="contain"
                                                        placeholder="blur" with animated shimmer blurDataURL
                                                    />
                                                </div>
                                                <Link href="/features/Booking">
                                                    <a class="h-full pl-3 text-custom-900 hover:text-slate-500">
                                                        <p >Compliance</p>
                                                        <p class='font-light'>Every time</p>
                                                    </a>
                                                </Link>
                                            </div>
                                        </span>
                                        Features
                                    </a>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    <a class="hover:text-slate-500">Pricing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a class="hover:text-slate-500">About</a>
                                </Link>
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