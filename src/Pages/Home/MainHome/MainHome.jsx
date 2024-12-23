import React from 'react'
import { Hero } from '../Hero-section/Hero'
import { About } from '../../About/About'
import './main.css';
import { Project } from '../../Project/Project';


export const MainHome = () => {
  return (
    <div className='bg'>
        <Hero/>
        <About/>
        <Project/>
       
    </div>
  )
}
