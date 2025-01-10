import React from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <div className='flex items-center justify-between py-5 font-medium'>

      <img src={assets.logo} className='w-36' alt="logo" />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTIONS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>

          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
        
      </ul>

      <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="search icon" />

            <div className='group relative'>
        <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile icon" />
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 text-gray-500 rounded bg-slate-100'>
                <p className='cursor-pointer  hover:text-black'>My Profile</p>
                <p className='cursor-pointer  hover:text-black'>Orders</p>
                <p className='cursor-pointer  hover:text-black'>Logout</p>
            </div>
        </div>
      </div>
      <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart icon" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
