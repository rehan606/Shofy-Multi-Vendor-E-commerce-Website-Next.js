"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ProductType } from '../../type'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/shopySlice'
import toast from 'react-hot-toast'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddToCartButton = ({ product, className }: {product: ProductType; className?: string;}) => {

  const dispatch = useDispatch();
  const handleAddToCart = () =>{
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product?.title.substring(0,10)}... added successfully! `)
    }
  }
  return (
    <button 
      onClick={handleAddToCart} 
      className={twMerge('bg-tranparent border border-sky-500 text-black rounded-full py-1.5 hover:bg-sky-500 hover:text-white duration-300 my-2', className

      )}
      >Add To Cart
    </button>
  )
}

export default AddToCartButton
