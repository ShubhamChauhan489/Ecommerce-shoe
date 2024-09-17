import React from 'react'
import { Dot, Heart } from 'lucide-react';
import { Star } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Truck } from 'lucide-react';
const HeroSection = () => {
  return (
    <div className='flex'>
        {/* Left container */}
        <div className='mt-8 px-4 w-1/2'>
            <div className='flex items-center gap-6'>
           
            <div className='flex gap-2'>
                <p>Best Shoes</p>
                <Dot className='text-gray-400 font-bold' />
                <p> Shoes</p>
                <Dot className='text-gray-400 font-bold' />
                <p>Nike</p>
            
            </div>

            </div>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e90f28-b203-49ae-bdf7-af5a443bd0a4/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="shoe"  className="w-full object-cover h-auto mt-4 rounded-2xl" />

            <div className='flex  gap-6 mt-6'>
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29237018-319d-49e3-bba7-47ae3fbb82a6/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img2" className="w-1/5 h-32 object-cover  rounded-lg border border-gray-300"/>
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e8f0a3ef-6767-4497-a223-2057393c9aa6/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img1" className="w-1/5 h-32 object-cover  rounded-lg border border-gray-300"/>
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce2aa856-0040-4867-9469-bb411ba87686/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img3" className="w-1/5 h-32  object-cover rounded-lg border border-gray-300" />
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2e9b94e3-078e-42f1-8059-fd78e72ab4ac/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img4" className="w-1/5 h-32  object-cover  rounded-lg border border-gray-300"/>
                <p className='flex justify-center items-center w-1/5 h-32 border border-gray-300 rounded-lg text-gray-500'>+4 more</p> 
            </div>
        </div>
        {/* Right-container */}
        <div className='mt-16 px-20'>
          <div className='flex items-center gap-2 mb-4'>
            <img src="https://res.cloudinary.com/dmubfrefi/image/private/s--y0Ax_FO6--/c_crop,h_2813,w_5000,x_0,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAACwmBs" alt="logo" className='h-6 w-6 rounded-full' />
            <p>Nike</p>
          </div>
          
            <h2 className='text-2xl font-semibold mt-4'>Shoes Nike Air Jordan 1</h2>
          <div className='flex items-center gap-2 mt-4'>
            <Star fill='#edbb07' stroke='#edbb07' className='w-6 h-6'/><Star fill='#edbb07' stroke='#edbb07' className='w-6 h-6'  /><Star fill='#edbb07' stroke='#edbb07' className='w-6 h-6'/> <Star fill='#edbb07' stroke='#edbb07' className='w-6 h-6'/><Star fill='#e9e9e9' stroke='#e9e9e9' className='w-6 h-6 text-gray-300'/>
            <p className='text-gray-300'>42 reviews</p>
          </div>
          <p className='text-6xl font-semibold mt-10'>$110.00</p>
          <div className='flex mt-10'>
            <p className='font-semibold'>Color</p>
            <Dot className='text-gray-400 font-bold' />
            <p className='text-gray-400'>Red</p>
          </div>
          <div className='flex items-center mt-4 gap-3'>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e90f28-b203-49ae-bdf7-af5a443bd0a4/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="shoe-img" className='w-10 h-16 object-cover rounded-lg border border-gray-400' />
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2ce111f2-d961-485d-ad03-6a22d1ea78bb/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="shoe-img" className='w-10 h-16 object-cover rounded-lg border border-gray-400' />
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d0de537-b3ac-499c-9d09-e086710b5da4/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="shoe-img" className='w-10 h-16 object-cover rounded-lg border border-gray-400' />
          </div>
          <div>
            <div className='flex items-center mt-12'>
              <p>Size</p>
              <Dot className='text-gray-400 font-bold' />
              <p className='text-gray-400'>EU Men</p>
            </div>
            <div className='flex [&>p]:flex [&>p]:items-center [&>p]:justify-center hover:[&>p]:bg-black hover:[&>p]:text-white [&>p]:cursor-pointer gap-4 mt-4'>
              <p className='h-10 w-16 border'>40.5</p>
              <p className='h-10 w-16 border'>40.5</p>
              <p className='h-10 w-16 border'>40.5</p>
              <p className='h-10 w-16 border'>40.5</p>
              <p className='h-10 w-16 border'>40.5</p>
              <p className='h-10 w-16 border'>40.5</p>
              <p className='h-10 w-16 border'>40.5</p>
            </div>
            <div className='flex items-center mt-8'>
              <p>Size</p>
              <Dot className='text-gray-400 font-bold' />
              <p className='text-gray-400'>UK Men</p>
            </div>
            <div className='flex [&>p]:flex [&>p]:items-center [&>p]:justify-center hover:[&>p]:bg-black hover:[&>p]:text-white [&>p]:cursor-pointer gap-4 mt-4'>
              <p className='h-10 w-16 border'>6</p>
              <p className='h-10 w-16 border'>7</p>
              <p className='h-10 w-16 border'>8</p>
              <p className='h-10 w-16 border'>9</p>
              <p className='h-10 w-16 border'>10</p>
              <p className='h-10 w-16 border'>11</p>
            </div>
            <p className='text-yellow-300 mt-2 text-sm'>Size Guid</p>
            <div className='flex gap-2 mt-14'>
              <button className='flex bg-black text-white w-full  justify-center items-center gap-2 rounded-lg'> <ShoppingBag /> Add to Cart </button>
              <button className='flex items-center justify-center h-14 w-14  p-2 bg-gray-300 rounded-lg'><Heart /></button>
             
              
            </div>
            <div className='flex items-center gap-1 mt-4'>
              <Truck />
              <p className='font-semibold text-sm'>Free delievery on orders over $30.0</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
