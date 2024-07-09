import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SuperQuality = () => {
  return (
    <div className='p-8 flex justify-between items-center max-lg:flex-col gap-5 w-full'>
      {/* Left side */}
      <div className='flex flex-1 flex-col gap-12'>
        <h1 className='font-palanquin font-bold text-[36px] lg:max-w-sm'>
          Experience 
          <span className='text-coral-red'> our super Quality </span>
          Foot wears
        </h1>

        <p className='lg:max-w-lg leading-7 text-slate-gray'>
          Experience the ultimate in comfort and style with our super quality shoes. Crafted with precision using premium materials for unmatched durability. Our designs combine elegance and functionality, perfect for any occasion. Step confidently with superior support and exceptional comfort. Elevate your footwear game and walk in excellence way!
        </p>

        <p className='text-slate-gray'>Our dedication to detail and excellence ensures your satisfaction.</p>

        <div>
          <Button label='Shop now' iconUrl={arrowRight}/>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt="shoe"
          width={580}
          height={530}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default SuperQuality