"use client"
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ProductType, StateType } from '../../type'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/redux/shopySlice'
import toast from 'react-hot-toast'
import { FaMinus, FaPlus } from 'react-icons/fa'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddToCartButton = ({ product, className }: {product: ProductType; className?: string;}) => {

  const { cart } = useSelector((state:StateType) => state?.shopy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null> (null);

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if(availableProduct){
      setExistingProduct(availableProduct)
    }
  }, [cart, product]);

  const dispatch = useDispatch();
  const handleAddToCart = () =>{
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product?.title.substring(0,10)}... added successfully! `)
    }
  }
  return <>
    { existingProduct? <div className='flex self-start items-center justify-center gap-2 py-2 mb-2'>
      <button className='bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-sky-400 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'> <FaMinus/> </button> 
      <p className='text-base font-semibold w-10 text-center'>{existingProduct?.quantity}</p>
      <button className='bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-sky-400 rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'> <FaPlus/> </button>
    </div> : <button 
      onClick={handleAddToCart} 
      className={twMerge('bg-tranparent border border-sky-500 text-black rounded-full py-1.5 hover:bg-sky-500 hover:text-white duration-300 my-2', className

      )}
      >Add To Cart
    </button> }
    
    
  </>
}

export default AddToCartButton
