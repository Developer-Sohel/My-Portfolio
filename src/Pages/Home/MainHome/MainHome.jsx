import React from 'react'
import { Hero } from '../Hero-section/Hero'
import { About } from '../../About/About'
import './main.css';

export const MainHome = () => {
  return (
    <div className='bg'>
        <Hero/>
        <About/>
    </div>
  )
}
