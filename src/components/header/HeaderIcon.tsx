"use client"

import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { StateType } from '../../../type'

const HeaderIcon = () => {

  const { cart , favorite} = useSelector((state:StateType) => state?.shopy);
  return (
    <>
      <Link href={"/favorite"} className='text-2xl relative'>
        <MdFavoriteBorder/>
        <span className='absolute -top-1 -right-1 text-[12px] font-medium w-4 h-4 bg-[#2269bb] rounded-full text-white flex items-center justify-center' > {favorite?.length > 0 ? favorite?.length: '0'} </span>
      </Link>
      <Link href={"/cart"} className='text-2xl relative'>
        <BiShoppingBag/>
        <span className='absolute -top-1 -right-1 text-[12px] font-medium w-4 h-4 bg-[#2269bb] rounded-full text-white flex items-center justify-center' >{cart?.length > 0 ? cart?.length : '0'}</span>
      </Link>
    </>
  )
}

export default HeaderIcon
