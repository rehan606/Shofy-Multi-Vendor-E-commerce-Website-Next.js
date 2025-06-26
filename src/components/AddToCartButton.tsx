"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'

const AddToCartButton = () => {
  return (
    <button onClick={()=>window.alert('Button Clicked')} className={twMerge('bg-tranparent border border-sky-500 text-black rounded-full py-1.5 hover:bg-sky-500 hover:text-white duration-300 my-2')}>Add To Cart</button>
  )
}

export default AddToCartButton
