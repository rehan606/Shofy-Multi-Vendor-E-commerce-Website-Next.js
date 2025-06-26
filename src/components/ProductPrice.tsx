import React from 'react'
import { ProductType } from '../../type';
import PriceFormat from './PriceFormat';

const ProductPrice = ({ product }: {product: ProductType }) => {

    const regularPrice = product?.price;
    const discountPrice = product?.price + product?.discountPercentage / 100 ;
    

    return (
      <div className="flex items-center gap-2">
         <PriceFormat amount={discountPrice} className='text-gray-500 line-through font-normal'/>
         <PriceFormat amount={regularPrice} className='text-sky-500 font-semibold'/>
         
      </div>
    )
}

export default ProductPrice
