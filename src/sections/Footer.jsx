import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer id='footer' className='mt-16 p-8 bg-black text-white'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 max-lg:gap-16 gap-10'>
        {/* Nikee links */}
        <div className='flex flex-1 flex-col gap-8'>
          <img
            src={footerLogo}
            alt="nike"
            width={100}
          />

          <p className='text-slate-gray lg:max-w-sm '>Stay updated with our latest collections, special offers, and more by following us on social media. Join the thousands of satisfied customers who have made the switch to our premium shoes. Stay Connected to us!</p>

          <div className='flex gap-7'>
            {socialMedia.map((socailMedia, index) => (
              <div key={index}>
                <img
                  src={socailMedia.src}
                  alt={socailMedia.alt}
                  className='bg-white rounded-full p-1'
                />
              </div>
            ))}
          </div>
        </div>

        {/* other sections  */}
        <div className='grid grid-cols-3'>
          {footerLinks.map((sections, index) => (
            <div key={index}>
              <h1 className='font-palanquin font-medium text-2xl mb-4'>{sections.title}</h1>

              {sections.links.map((sec, index) => (
                <ul>
                  <li className='font-montserrat text-slate-gray font-[10px]'>
                    <a href={sec.link}>{sec.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* copyright */}
      <div className='mt-16 flex justify-between text-slate-gray font-medium'>
        <div className='flex gap-4'>
          <img
            src={copyrightSign}
            alt="copyright"
          />

          <h3>Copyright All rights reserved</h3>
        </div>
        <h3 className='hidden lg:block'>Gurmad Harir Abdille</h3>
        <h3>Terms & conditions</h3>
      </div>
    </footer>
  )
}

export default Footer