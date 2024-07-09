import React, { useState } from 'react';
import Button from '../components/Button';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import { arrowRight } from '../assets/icons';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [cardShoeImage, setCardShoeImage] = useState(bigShoe1);

  const handleChangeImage = (image) => {
    setCardShoeImage(image);
  };

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-between items-center xl:pl-8 min-h-screen relative overflow-hidden'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 pt-28'>
        <h3 className='text-amber-600 mb-5'>Our summer collections</h3>

        <h1 className='mt-5 font-palanquin text-8xl max-sm:text-4xl max-sm:leading[80] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Explore the Latest</span>
          <br />
          <span className='text-coral-red'>Nike </span>
          Shoes
        </h1>

        <p className='mt-5 mb-8 text-slate-gray text-lg leading-7 sm:max-w-[500px]'>
          Discover the latest Nike arrivals offering unparalleled quality, comfort, and innovative designs for your active lifestyle.
        </p>

        <Button label="Shop now" iconUrl={arrowRight} />

        <div className='w-full mt-10 flex justify-start gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-3xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex justify-center items-center xl:min-h-screen max-lg:mx-5 max-lg:mt-5 bg-primary bg-hero bg-cover bg-center '>
        <img
          src={cardShoeImage}
          alt='shoe collection'
          width={780}
          className='object-contain relative p-28'
        />
      </div>

      <div className='flex gap-5 absolute right-[6%] bottom-[2%] max-lg:-right-3 max-lg:-left-3 max-lg:bottom-0 max-lg:mx-5 max-lg:mt-5'>
        {shoes.map((shoe, index) => (
          <div key={index}>
            <ShoeCard
              imgUrl={shoe.thumbnail}
              isSelected={shoe.thumbnail === cardShoeImage}
              handleChangeImage={() => handleChangeImage(shoe.thumbnail)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;