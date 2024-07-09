import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section id='reviews' className='p-8 my-10'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='font-palanquin font-bold text-[36px]  max-lg:text-[34px]'>
          What Our <span className='text-coral-red'> Customers </span> Say ?
        </h1>

        <p className='max-w-lg text-center text-slate-gray'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>

      <div className='mt-16 flex justify-evenly max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <div key={index}>
            <ReviewCard 
              reviewerPic={review.imgURL}
              reviewerFeedback={review.feedback}
              reviewRate={review.rating}
              reviewerName={review.customerName}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews