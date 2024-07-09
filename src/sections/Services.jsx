import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div id='services' className='p-8 grid lg:grid-cols-3 md:grid-flow-col sm:grid-cols-1 gap-8'>
      {services.map((service, index) => (
        <div key={index} className='h-[200px] flex flex-col justify-between bg-white shadow-3xl px-8 py-9 rounded-[20px]'>
          <img
            src={service.imgURL}
            alt="service-image"
            width={30}
            className='bg-coral-red p-2 rounded-full'
          />

          <h1 className='font-palanquin font-bold'>
            {service.label}
          </h1>

          <p className='text-slate-gray'>
            {service.subtext}
          </p>
        </div>
      ))}
    </div>

  )
}

export default Services