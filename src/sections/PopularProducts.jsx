import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='mt-16 p-8 max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h3 className='font-palanquin text-[36px] font-bold'>
          Our
          <span className='px-[10px] text-coral-red '>Popular</span>
          Products
        </h3>


        <p className='lg:max-w-lg leading-8-sans text-[16px] text-slate-gray '>Discover our top netch quality and style with our sought after selections, Discover a world of comfort design and value. Ours are guaranteed!</p>

        {/* Popular product cards */}
        <div className='mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-16'>
          {products.map((product, index) => (
            <div key={index}>
              <PopularProductCard
               productImage={product.imgURL}
               productRate={product.rating}
               productName={product.name}
               productPrice={product.price}
             />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularProducts