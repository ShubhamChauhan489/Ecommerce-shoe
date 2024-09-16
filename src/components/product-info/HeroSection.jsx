import React from 'react'
import { Dot } from 'lucide-react';
const HeroSection = () => {
  return (
    <div>
        {/* Left container */}
        <div className='mt-8 px-4'>
            <div className='flex items-center gap-6'>
           
            <div className='flex gap-2'>
                <p>Best Shoes</p>
                <Dot className='text-gray-400 font-bold' />
                <p> Shoes</p>
                <Dot className='text-gray-400 font-bold' />
                <p>Nike</p>
            
            </div>

            </div>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6e90f28-b203-49ae-bdf7-af5a443bd0a4/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="shoe"  className="w-1/2 object-cover h-auto mt-4 rounded-2xl" />

            <div className='flex  gap-6 mt-6'>
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29237018-319d-49e3-bba7-47ae3fbb82a6/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img" className='h-20 w-20 rounded-xl'/>
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e8f0a3ef-6767-4497-a223-2057393c9aa6/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img" className='h-20 w-20 rounded-xl'/>
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce2aa856-0040-4867-9469-bb411ba87686/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img" className='h-20 w-20 rounded-xl' />
                <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2e9b94e3-078e-42f1-8059-fd78e72ab4ac/WMNS+AIR+JORDAN+1+MM+LOW.png" alt="img" className='h-20 w-20 rounded-xl'/>
                <p className='w-20 h-20 rounded-xl bg-gray-300 text-center p-4'>+4 more</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
