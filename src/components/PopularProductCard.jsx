import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ productImage, productRate, productName, productPrice }) => {
  return (
    <div>
      <div className='bg-primary bg-hero bg-cover bg-center rounded-3xl'>
        <img
          src={productImage}
          alt="productImage"
          className='w-full object-cover'
        />
      </div>
      
      <div className='my-4 flex gap-3'>
        <img src={star} alt="star" width={15}/>
        <h3 className='text-slate-gray text-[12px]'>({productRate})</h3>
      </div>

      <div className='leading-7'>
        <h1 className='font-palanquin font-semibold'>{productName}</h1>
        <h3 className='text-slate-gray'>
          Price: <span className='text-green-500'>{productPrice}</span>
        </h3>
      </div>
    </div>
  )
}

export default PopularProductCard