import { div } from 'motion/react-client'
import './about.css'
import { Skill } from '../Skill/Skill'

export const About = () => {
  return (

    <div className=''>
         <div className='container  lg:container lg:mx-auto  lg:px-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-2 py-2 gap-4 items-center'>
                {/* img-section */}
                <div>
                    <img src="Hero.png" className='bg shadow-md rounded-lg' alt="" />
                </div>
                {/* info */}
                <div>
                <h1 className='text-xl font-semibold text-slate-400 py-6'>About Us</h1>
                    <h1 className='text-3xl font-bold text-slate-400'>I AM SOHEL KHAN</h1>
                    <p className='text-slate-400 font-serif text-base font-light py-6'>
                    Welcome everyone. I am Sohel, a professional full-stack web developer. I have 3 years of experience in web development. In front-end web development, I use React, JavaScript, Tailwind CSS, Bootstrap, CSS, and HTML. And in the back-end, I use Node.js, Express JS, and MongoDB. For authentication, I prefer using Firebase. I conduct new research or intelligence to improve the website so that it becomes more user-friendly and is able to retain the user for a long time. I also work with the popular CMS, WordPress. I can easily create your favorite website using WordPress.
                    </p>
                    <div className='flex gap-3'>
                    <button className="btn btn-outline btn-info">Contact Me</button>
                    <button className="btn btn-outline btn-success">Project</button>
                    </div>
                </div>
            </div>
            <Skill/>
    </div>
    </div>
   
  )
}
