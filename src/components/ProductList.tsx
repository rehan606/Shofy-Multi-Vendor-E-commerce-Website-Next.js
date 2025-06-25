
"use client"


import React from 'react'
import Container from './Container'
import ProductCard from './ProductCard'
import { ProductType } from '../../type'

interface Props{
    products: ProductType[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Container className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(products) &&
            products.map((item: ProductType) => (
                <ProductCard key={item?.id} product={item} />
        ))}

        
        
      
    </Container>
  )
}

export default ProductList
