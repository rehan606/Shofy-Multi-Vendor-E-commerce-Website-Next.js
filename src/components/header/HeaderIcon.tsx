import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const HeaderIcon = () => {
  return (
    <>
      <Link href={"/favorite"} className='text-2xl relative'>
        <MdFavoriteBorder/>
        <span className='absolute -top-1 -right-1 text-[12px] font-medium w-4 h-4 bg-[#2269bb] rounded-full text-white flex items-center justify-center' >0</span>
      </Link>
      <Link href={"/cart"} className='text-2xl relative'>
        <BiShoppingBag/>
        <span className='absolute -top-1 -right-1 text-[12px] font-medium w-4 h-4 bg-[#2269bb] rounded-full text-white flex items-center justify-center' >0</span>
      </Link>
    </>
  )
}

export default HeaderIcon
