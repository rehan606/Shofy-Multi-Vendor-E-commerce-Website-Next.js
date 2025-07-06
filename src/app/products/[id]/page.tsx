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

          <p>You are saving {" "} <PriceFormat amount={(product?.price * product?.discountPercentage) / 100 } className="text-base font-semibold text-green-500"/> Upon purchase </p>

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

          <AddToCartButton product={product} className="rounded-md uppercase font-semibold" />

          <div className='bg-gray-100 w-full flex flex-col items-center justify-center p-5 gap-2 rounded-md'>

            <Image src={ payment } alt="Payment" className='w-auto object-cover' />

            <p className='font-semibold text-gray-500  mt-2'>Guaranteed safe & secure checkout</p>
          </div>
      </div>
      {/* Product Review  */}

        <div className='p-10 bg-[#F7F7F7] md:col-span-2 flex items-center gap-10'>
          {
            product?.reviews?.map((item) => (
              <div key={item?.reviewerName} className='bg-white/80 p-5 border-[1px] border-gray-300 rounded-md hover:border-gray-500  hover:bg-white duration-200 flex flex-col gap-1'>
                  <p className="text-base font-semibold ">{item?.comment}</p>
                  <div className="text-xs">
                    <p className=" font-semibold ">{item?.reviewerName} </p>
                    <p className=" ">{item?.reviewerEmail} </p>
                  </div>

                  {/* Review Star  */}
                  <div className='flex items-center'>
                    <div className='flex items-center'>
                      {Array?.from({ length: 5 })?.map((_, index) => (
                        <MdStar 
                          key={index} 
                          className={`${
                            index < item?.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        />
                      ))}
                    </div>
                  </div>
              </div>
            ))
          }
        </div>
    </Container>
  )
}

export default SingleProductPage ;