
import React,{useState} from 'react'
import Navbar from './components/navbar'
import NavTop from './components/navbar/NavTop'
import NavButtom from './components/navbar/NavButtom'
import HeroSection from './components/product-info/HeroSection'

const App = () => {
  return(<div className='mx-auto w-[90vw]'>
  < NavTop />
  < NavButtom />
  < HeroSection />
  </div>)
}

export default App