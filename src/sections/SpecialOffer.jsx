import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section id='offers' className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 p-8'>
      <div className='flex-1'>
        <img
          src={offer}
          alt="offer"
          width={790}
          height={690}
          className='object-contain'
        />
      </div>

      <div className='flex-1 flex flex-col gap-7 '>
        <h1 className='font-palanquin font-bold text-[36px] lg:max-w-sm'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h1>

        <p className='lg:max-w-lg leading-7 text-slate-gray'>
        Step out in style with our elegant and sophisticated shoe designs. Our collection includes a variety of styles to suit any occasion, from casual outings to formal events. Each pair is meticulously crafted to offer a perfect blend of fashion and function, ensuring you look your best while feeling comfortable, don't settle for anything less than the best. 
        </p>

        <p className='lg:max-w-lg leading-7 text-slate-gray'>Our shoes offer superior support and unmatched durability, perfect for any occasion. Special offer: Enjoy free shipping on orders over $50! Elevate your style with our premium footwear.</p>
        
        <p><span className='text-coral-red font-bold'>SHOP NOW!</span> and Walk in Excellence!</p>

        <div className='mt-8 flex flex-wrap gap-10'>
          <Button label='View details' isLarge={true}/>
          <button className='h-11 bg-white  border-[1px] rounded-full px-8 border-slate-gray text-slate-gray hover:bg-orange-400 hover:text-white hover:border-none transition-all duration-500'>
            Learn more
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer