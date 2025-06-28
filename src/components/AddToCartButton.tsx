"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ProductType } from '../../type'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddToCartButton = ({ product, className }: {product: ProductType; className?: string;}) => {
  return (
    <button 
      onClick={()=>window.alert('Button Clicked')} 
      className={twMerge('bg-tranparent border border-sky-500 text-black rounded-full py-1.5 hover:bg-sky-500 hover:text-white duration-300 my-2', className

      )}
      >Add To Cart
    </button>
  )
}

export default AddToCartButton
