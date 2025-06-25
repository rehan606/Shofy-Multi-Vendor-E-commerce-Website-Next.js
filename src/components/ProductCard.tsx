"use client"
import React from 'react'
import { ProductType } from '../../type'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ product}: { product: ProductType}) => {

    
    return (
        <div className="border p-4 relative group "> 

            <Link to="/">
            <Image ></Image>
            
            </Link>
        
            {product.title} 
        
        </div>
    )
}

export default ProductCard
