import React from 'react'

const Subscribe = () => {
  return (
    <section className='p-8 flex flex-col justify-center items-center gap-10'>
      <h1 className='font-palanquin font-bold text-[36px] text-center'>
        Sign up from <span className='text-coral-red'> updates </span> & Newsletters!
      </h1>

      <div className='flex flex-wrap'>
        <input
          type="text"
          placeholder='subscribe@nikee.com'
          className='bg-white shadow-3xl border-slate-gray py-4 lg:w-[512px] p-10 rounded-sm focus:border-b-orange-300'
        />

        <button className='bg-purple-600 text-white px-8 py-4 rounded-sm hover:opacity-90'>
          Signup
        </button>
      </div>

    </section>
  )
}

export default Subscribe