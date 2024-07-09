import React from 'react'

const Button = ({label, iconUrl, isLarge}) => {
  return (
    <button className={`${isLarge && 'h-12'} flex justify-center items-center gap-2 px-8 py-4 border font-montserrat bg-coral-red rounded-full text-white hover:opacity-90`}>
      {label}

      {
        iconUrl && <img src={iconUrl} className='ml-2 rounded-full w-5 h-5' alt="icon"  />
      }
    </button>
  )
}

export default Button