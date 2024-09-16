
import React from 'react'

const NavButtom = () => {
  return (
    <div className='px-4 flex flex-wrap gap-8 mt-4 text-sm border-b pb-3'>
      <p className='cursor-pointer hover:text-gray-500 transition-colors duration-300'>Women</p>
      <p className='cursor-pointer hover:text-gray-500 transition-colors duration-300'>Men</p>
      <p className='cursor-pointer hover:text-gray-500 transition-colors duration-300'>Kids</p>
      <p className='cursor-pointer hover:text-gray-500 transition-colors duration-300'>Sports</p>
      <p className='cursor-pointer hover:text-gray-500 transition-colors duration-300'>Brands</p>
      <p className='cursor-pointer hover:text-gray-500 transition-colors duration-300'>New</p>
      <p className='cursor-pointer text-red-600 hover:text-red-800 transition-colors duration-300'>Sale</p>
    </div>
  )
}

export default NavButtom
