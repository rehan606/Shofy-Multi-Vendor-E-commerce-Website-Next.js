"use client";

import React, { useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

const SearchInput = () => {

    const [search, setSearch] = useState("");

    return (
        <div className='hidden md:inline-flex flex-1 h-10 relative'>
            <input type="text" className='w-full h-full px-4 border-2 border-[#0C55AA] outline-none ' placeholder='Search Products Here...' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />

            {search && ( <RiCloseLine onClick={() => setSearch('')} className='text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200'/>)}

            <span className=' w-10 h-10 bg-[#2269bb] inline-flex items-center justify-center text-white cursor-pointer absolute top-0 right-0 hover:bg-[#5a7ca3]'> <RiSearchLine/> </span>
        </div>
    )
}

export default SearchInput
