import Image from 'next/image';
import React from 'react'

interface Props {
    images: string[];
}

const ProductImages = ({ images }: Props) => {
  return (
    <div>
        <div>
            <Image src={images?.[0]} alt='ProductImage' width={500} height={500}/>
        </div>
    </div>
  )
}

export default ProductImages
