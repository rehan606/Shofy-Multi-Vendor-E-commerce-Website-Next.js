import React from 'react'
import { ProductType } from '../../../type'
import Link from 'next/link'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CartProduct = ({ product }: {product: ProductType}) => {
    return (
        <div className='flex py-6 sm:py-10'>
            <Link href={{
                pathname: `/products/${product?.id}`, 
                query: {id: product?.id}
                }}
                className='h-24 w-24 sm:h-48 sm:w-48 border border-sky-500/30'
            >
                <Image 
                    src={product?.images[0]}
                    alt='productImage'
                    width={300}
                    height={300}
                    className='h-full w-full p-2 rounded-md object-centain bg-[#f7f7f7] hover:scale-110 duration-200
                    '
                />
            
            </Link>
        </div>
    )
}

export default CartProduct
