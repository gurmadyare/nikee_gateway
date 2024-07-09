import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({reviewerPic, reviewerFeedback, reviewerName, reviewRate }) => {
  return (
    <div className='flex flex-col justify-evenly items-center gap-5'> 
      <img
       src={reviewerPic} 
       alt="" 
       height={100}
       width={100}
       className='rounded-full'
      />

      <p className='lg:max-w-xs text-center text-slate-gray'>" {reviewerFeedback} "</p>

      <div className='flex gap-3'>
        <img 
          src={star}
          alt="star" 
        />

        <h3>({reviewRate})</h3>
      </div>

      <h1 className='font-palanquin font-bold text-[20px]'>{reviewerName}</h1>
    </div>
  )
}

export default ReviewCard