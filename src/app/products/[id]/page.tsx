import Container from '@/components/Container';
import ProductImages from '@/components/ProductImages';
import { getData } from '@/helpers';
import React from 'react'
import { ProductType } from '../../../../type';
import ProductPrice from '@/components/ProductPrice';
import { MdStar } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import PriceFormat from '@/components/PriceFormat';
import AddToCartButton from '@/components/AddToCartButton';
import payment from '@/assets/payment.webp'
import Image from 'next/image';

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
      <div className='flex flex-col gap-4'>
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
          <p className="flex items-center">
            <FaRegEye className='mr-1' /> {" "} <span className="font-semibold mr-1"> 250+ </span>people are viewing this right now
          </p>

          <p>You are saving <PriceFormat amount={product?.discountPercentage / 100 } className="text-base font-semibold text-green-500"/> Upon purchase </p>

          <div>
            <p className='text-sm tracking-wide'>{product?.description}</p>
            <p className='text-base'>{product?.warrantyInformation}</p>
          </div>

          <p >Brand: <span className='font-medium'>{product?.brand}</span> </p>
          <p >Category: {""} <span className='font-medium capitalize'>{product?.category}</span> </p>
          <p>Tags: {product?.tags?.map((item, index) => (
            <span className='font-medium capitalize' key={index}>{item} {index < product?.tags?.length - 1 && ", "}</span>
          ))}
          </p>

          <AddToCartButton product={product} />

          <div className='bg-gray-200 w-full'>
           
            <Image src={ payment } alt="Payment"/>
            <p>Guaranteed safe & secure checkout</p>
          </div>
      </div>
      {/* Product Review  */}
    </Container>
  )
}

export default SingleProductPage ;