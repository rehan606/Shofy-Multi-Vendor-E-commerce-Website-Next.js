"use client";

import { getData } from '@/helpers';
import React, { useEffect, useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { ProductType } from '../../../type';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const endpoint = 'https://dummyjson.com/products';

            try {
                const data = await getData(endpoint);
                setProducts(data?.products)
            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        getProducts();
    },[]);

    // search filter data 
    useEffect (() => {
        const filtered = products?.filter((item:ProductType)=>
            item?.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filtered);
    },[search , products]);

    return (
        <div className='hidden md:inline-flex flex-1 h-10 relative'>
            <input type="text" className='w-full h-full px-4 border-2 border-[#0C55AA] outline-none ' placeholder='Search Products Here...' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />

            {search && ( <RiCloseLine onClick={() => setSearch('')} className='text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200'/>)}

            <span className=' w-10 h-10 bg-[#2269bb] inline-flex items-center justify-center text-white cursor-pointer absolute top-0 right-0 hover:bg-[#5a7ca3]'> <RiSearchLine/> </span>

            {/* Search Product  */}
            {search && (
                <div className='absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black p-4'>
                    {filteredProducts?.length > 0 ? 
                        (<div>
                            {filteredProducts?.map((item:ProductType) => (
                            
                                <Link 
                                    key={item?.id}
                                    href={{
                                        pathname: `/products/${item?.id}`,
                                        query: { id: item?.id },
                                    }} 
                                    onClick={() => setSearch("")}

                                    className='flex items-center gap-x-2 text-base font-medium hover:bg-gray-400 px-3 py-1.5'
                                    >
                                    <CiSearch className='text-lg'/> {item?.title}
                                </Link>
                            ))}
                        </div> 
                        ) : (
                        <div className='py-10 px-5'>
                            <p>
                                Nothing Matched With {" "} <span className='font-semibold underline underline-offset-2 decoration-[1px]'>{search}</span> {" "} Please Try Again.
                            </p>
                        </div>)
                    }
                </div>
            )}


        </div>
    )
}

export default SearchInput
