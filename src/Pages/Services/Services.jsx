import './services.css';

export const Services = () => {
  return (
    <div id="Services">
        <div className='container  lg:container lg:mx-auto lg:py-20 lg:px-24'>
        <h1 className='text-slate-400 font-medium text-xl mb-6 lg:mb-16 text-center'>Services</h1>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'> 

            <div className='services px-2 py-2 rounded-xl shadow-2xl border border-cyan-400'>
                <h1 className='text-green-400 font-medium text-xl'>Mern-Stack Prject</h1>
                <p className='text-slate-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur delectus nesciunt? Blanditiis, similique distinctio. At debitis suscipit unde molestias, tempore ab doloremque aperiam eaque?</p>
            </div>
            <div className='services px-2 py-2 rounded-xl shadow-2xl border border-cyan-400'>
                <h1 className='text-green-400 font-medium text-xl'>Front-End Prject</h1>
                <p className='text-slate-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur delectus nesciunt? Blanditiis, similique distinctio. At debitis suscipit unde molestias, tempore ab doloremque aperiam eaque?</p>
            </div>

            <div className='services px-2 py-2 rounded-xl shadow-2xl border border-cyan-400'>
                <h1 className='text-green-400 font-medium text-xl'>E-commerce Development</h1>
                <p className='text-slate-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur delectus nesciunt? Blanditiis, similique distinctio. At debitis suscipit unde molestias, tempore ab doloremque aperiam eaque?</p>
            </div>

            <div className='services px-2 py-2 rounded-xl shadow-2xl border border-cyan-400'>
                <h1 className='text-green-400 font-medium text-xl'>E-commerce Development</h1>
                <p className='text-slate-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur delectus nesciunt? Blanditiis, similique distinctio. At debitis suscipit unde molestias, tempore ab doloremque aperiam eaque?</p>
            </div>

        </div>
    </div>
    </div>
    
  )
}
