import './hero.css';
import { TypeAnimation } from 'react-type-animation';
import { scroll } from "motion"
import { About } from '../../About/About';
export const Hero = () => {
  return (
    <div className=''>

<div className="hero  min-h-screen text-white container  lg:container lg:mx-auto lg:py-20 lg:px-16">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="Hero.png"
      className="lg:w-full w-[550px]" />
    <div>
      <h1 className="lg:text-5xl text-3xl font-bold mb-3  ">I'M SOHEL KHAN</h1>

      <p className='text-green-400 font-semibold mt-3 mb-3 lg:text-xl text-[14px] '>
     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mern-Stack Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1000,
        'Project Managment',
        1000,
        'Content Creatir',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
     </p>

     
      
      <p className="py-3 mb-3">
      Mern-Stack Developer | Adept Front-End Developer | MongoDB, NodeJS , ExpressJS , ReactJS , JavaScript , Tailwind. 
      </p>
      <div className='flex gap-4'>
      <button className="btn btn-outline btn-accent text-white ">Download cv</button>
      <button className="btn btn-outline btn-secondary text-black">All Project</button>


      </div>
    </div>
  </div>
</div>

   
    </div>
  )
}
