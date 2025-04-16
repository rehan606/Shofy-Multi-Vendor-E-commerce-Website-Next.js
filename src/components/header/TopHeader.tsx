import React from 'react'
import Container from '../Container'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  return (
    <div className='bg-[#010f1c] text-gray-200'>
        <Container className='flex justify-between items-center'>

            <p className=' w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1'> <CiDeliveryTruck className='text-[#ffb342] mr-2 text-2xl'/> Free Express Shipping On Orders $570+</p>
            
            <div className='hidden md:inline-flex items-center text-sm text-white'>
                <p className='flex items-center  border-r-[1px] border-r-gray-400 px-4'>English <IoIosArrowDown className='mt-1'/> </p>
                <p className='flex items-center  border-r-[1px] border-r-gray-400 px-4'>USD <IoIosArrowDown className='mt-1'/> </p>
                <p className='flex items-center  border-r-[1px] border-r-gray-400 px-4'>Settings <IoIosArrowDown className='mt-1'/> </p>
            </div>
        </Container>
        
    </div>
  )
}

export default TopHeader