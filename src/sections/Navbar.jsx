import React from 'react'
import HeaderLogo from '../assets/images/header-logo.svg'
import Hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants/index.js'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 p-8'>
      <nav className='flex justify-between items-center'>
        <a href='/'>
          <img
            src={HeaderLogo}
            alt="Logo"
            width={135}
            height={30}
          />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray ' >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden max-lg:block'>
          <img
            src={Hamburger}
            alt="HamburgerIcon"
            width={25} 
            height={25}
          />
        </div>

        <div className='pr-10 text-slate-700 cursor-pointer hover:text-slate-400 max-xl:hidden'>
          <a href="#">Sign in / Explore now</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar