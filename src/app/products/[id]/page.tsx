import Container from '@/components/Container';
import ProductImages from '@/components/ProductImages';
import { getData } from '@/helpers';
import React from 'react'
import { ProductType } from '../../../../type';
import ProductPrice from '@/components/ProductPrice';
import { MdStar } from 'react-icons/md';

interface Props {
  params: {
    id: string;
  };
};

const SingleProductPage = async ({ params }: Props) => {
  const { id } = params;

  const endpoint = `https://dummyjson.com/products/${id}`;
  const product:ProductType = await getData(endpoint);


  return (
    <Container className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>

      {/* Product Image  */}
      <ProductImages images={product?.images}/>
      {/* Product Details  */}
      <div className='flex felx-col gap-4'>
          <h3 className='text-3xl font-bold '>{product?.title}</h3>
          <div className='flex items-center  justify-between gap-5'>
              <ProductPrice product={product}/>
              
              <div className='flex items-center gap-1'>
                  <div className='flex items-center text-base text-gray-400'>
                      {Array?.from({length:5})?.map((_,index) => {
                        const filled = index + 1 <= Math.floor(product?.rating);
                        const halfFilled = index + 1 > Math.floor(product?.rating) && index < Math.ceil(product?.rating);
                        return <MdStar key={index} className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-[#f7ca00]" : "text-[text-gray-400]"}`} />
                      })}
                  </div>
                  <p className='text-base font-semibold'>{`(${product?.rating?.toFixed(1)}) Reviews`} </p>
              </div>
          </div>
          <p>{}</p>
      </div>
      {/* Product Review  */}
    </Container>
  )
}

export default SingleProductPage ;