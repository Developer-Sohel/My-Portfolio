import React from 'react'
import { Hero } from '../Hero-section/Hero'
import { About } from '../../About/About'
import './main.css';
import { Services } from '../../Services/Services';

export const MainHome = () => {
  return (
    <div className='bg'>
        <Hero/>
        <About/>
        <Services/>
    </div>
  )
}
