import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png';

const MainLoader = () => {
    return (
        <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center z-50">
            <div className="w-52 p-4 rounded-lg bg-blue-500 flex items-center justify-center relative">
                <Image 
                    src={logo}
                    alt="logo"
                    className="w-48 h-auto object-contain"
                    priority
                    />
            </div>

            <span className="w-14 h-14 inline-flex border-8 border-gray-200 border-full relative">
                <span className="w-14 h-14 inline-flex border-8 border-gray-200 border-r-blue-300 border-b-gray-200 border-t-gray-200 border-l-gray-200 rounded-full absolute -top-2 -left-2 animate-spin ">
                    
                </span>
                <p  className="text-lg text-center font-semibold tracking-wide text-blue-500">Loading...</p>
            </span>
        </div>
  )
}

export default MainLoader;
