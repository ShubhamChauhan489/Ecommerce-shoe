import React from 'react'
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Heart } from 'lucide-react';

const NavTop = () => {
  return (
    <div className=' flex items-center justify-between mt-4 px-4'>
      <p className='font-semibold text-2xl'>
        Shoe.<span className='text-gray-400'>HUB</span>
      </p>
      
      <div className="relative">
        <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="px-10 py-1 w-60 border rounded text-gray-400 bg-gray-200"
        />
      </div>

      <div className='flex items-center gap-8'>
        <div className='flex flex-col items-center'>
          <ShoppingBag className="text-gray-600" />
          <p className='text-sm'>Cart</p>
        </div>
        
        <div className='flex flex-col items-center'>
          <Heart className="text-gray-600" />
          <p className='text-sm'>Favourite</p>
        </div>
        
        <img
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid"
          alt="profile"
          className='h-10 w-10 rounded-full'
        />
      </div>
    </div>
  );
}

export default NavTop;
