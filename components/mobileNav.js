
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
const myLoader = ({ src, width, quality }) => {
    return `https://s3.sailia.co.uk/${src}`
}
const activeSide = "bg-white h-screen w-screen  absolute transform transition-all fixed duration-700  flex  p-8"
const hiddenSide = " hidden"
const activeButton = " w-10 h-10 text-3xl my-auto top-0 z-50 cursor-pointer transition-all transform duration-700 flex items-center justify-center"
const normalButton = " w-10 h-10 text-3xl my-auto top-0 z-50 cursor-pointer transition-all transform duration-700 flex items-center justify-center"

//-------------main part --------
class Home extends React.Component {
    constructor() {
        super();
        this.state = {active: false};
		}
    render() {
        return (
            <div class='flex justify-between'>
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
                    </div>
                <div class='absolute top-24 left-0'>
                <div
//-----use a class to style base on state : active(true) or hidden(false)
                    className={this.state.active ? activeSide:hiddenSide}>
                    <ul>
                        <li>
                            Features
                            <div class='mt-2 flex w-max h-max mb-5 ml-5'>
                                <div class="h-7 w-7 m-auto relative aspect-square">
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
                                    <a class="h-full pl-3 mt-0.5 text-custom-900 hover:text-slate-500">
                                        <p >Management</p>
                                        
                                    </a>
                                </Link>
                            </div>
                            <div class='flex w-max h-max mb-5 ml-5'>
                                <div class="h-7 w-7 m-auto relative aspect-square">
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
                                    <a class="h-full pl-3 mt-0.5 text-custom-900 hover:text-slate-500">
                                        <p >Booking</p>
                                        
                                    </a>
                                </Link>
                            </div>
                            <div class='flex w-max h-max mb-5 ml-5'>
                                <div class="h-7 w-7 m-auto relative aspect-square">
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
                                    <a class="h-full pl-3 mt-0.5 text-custom-900 hover:text-slate-500">
                                        <p >Online Precence</p>
                                        
                                    </a>
                                </Link>
                            </div>
                            <div class='flex w-max h-max mb-5 ml-5'>
                                <div class="h-7 w-7 m-auto relative aspect-square">
                                    <Image
                                        loader={myLoader}
                                        src="websiteAssets/header/Shop.svg"
                                        alt="Wheel"
                                        layout='fill'
                                        objectFit="contain"
                                        placeholder="blur" with animated shimmer blurDataURL
                                    />
                                </div>
                                <Link href="/features/Shop">
                                    <a class="h-full pl-3 mt-0.5 text-custom-900 hover:text-slate-500">
                                        <p >Shop</p>
                                        
                                    </a>
                                </Link>
                            </div>
                            <div class='flex w-max h-max mb-5 ml-5'>
                                <div class="h-7 w-7 m-auto relative aspect-square">
                                    <Image
                                        loader={myLoader}
                                        src="websiteAssets/header/Compliance.svg"
                                        alt="Wheel"
                                        layout='fill'
                                        objectFit="contain"
                                        placeholder="blur" with animated shimmer blurDataURL
                                    />
                                </div>
                                <Link href="/features/Compliance">
                                    <a class="h-full pl-3 mt-0.5 text-custom-900 hover:text-slate-500">
                                        <p >Compliance</p>
                                        
                                    </a>
                                </Link>
                            </div>
                        </li>
                        <li class='mt-2'>
                            <Link href="/pricing">
                                    <a class="hover:text-slate-500">Pricing</a>
                            </Link>
                        </li>
                        <li class='mt-2'>
                            <Link href="/about">
                                    <a class="hover:text-slate-500">About</a>
                            </Link>
                        </li>
                        <li class='mt-2'>
                            Sign Up
                        </li>
                    </ul>
                </div>
                </div>
            <div className={this.state.active ? normalButton : activeButton} onClick={() =>this.setState({ active: !this.state.active })}>	&#9776;</div>

        </div>);
    }
}

// React.render(<Home />, document.getElementById('app'));

export default Home