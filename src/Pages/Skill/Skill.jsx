
import { FaGraduationCap, FaReact, FaBootstrap, FaCss3, FaHtml5 , FaNodeJs    } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { MdError } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { CgDebug } from "react-icons/cg";


export const Skill = () => {
  return (
    <div className="container lg:mx-auto">
        <div className='grid grid-cols-1 lg:grid-cols-2 py-20 px-2 gap-5'>

        {/* Education-section */}
       
        <div className='shadow-2xl px-5 py-5 rounded-md'>
        <h1 className='text-2xl font-bold text-green-400'>Education</h1>
            <h1 className='text-slate-400 font-medium lg:text-xl py-3'><span className="text-orange-400"><FaGraduationCap />
            </span> Bachelor of Business Administration</h1>
            <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis cumque ut quos atque recusandae vitae voluptas natus nihil ad!</p>
            <p className='font-bold text-red-300 py-3'>Passing Year : <span className='text-green-400'>2020-Present</span></p>

            <div className="divider divider-accent"></div>


            <div>

            
            <h1 className='text-slate-400 font-medium lg:text-xl py-3'> <span className="text-orange-400"><FaGraduationCap />
            </span>Bachelor of Business Administration</h1>
            <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis cumque ut quos atque recusandae vitae voluptas natus nihil ad!</p>
            <p className='font-bold text-red-300 py-3'>Passing Year : <span className='text-green-400'>2020-Present</span></p>
                
            </div>


        </div>


        {/* Skill-section */}
        <div className="shadow-2xl  rounded-2xl">

            <h1 className="text-orange-400 font-bold text-xl px-2">Technical Skills</h1>

            <div className="grid grid-cols-3 lg:grid-cols-4 py-6 px-4 gap-4">


            <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    
                    <div className="text-xl"><FaReact /></div>
                    <div>ReactJS</div>
                    
                </div>


                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <RiTailwindCssFill />

                    </div>
                    <div>tailwind</div>
                    
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <RiNextjsFill />
                    </div>
                    <div>NextJS</div>
                    
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <FaBootstrap />
                    </div>
                    <div>Bootstrap</div>
                    
                </div>
                
                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <FaCss3 />

                    </div>
                    <div>CSS</div>
                    
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <FaHtml5 />


                    </div>
                    <div>HTML</div>
                    
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <IoLogoJavascript />

                    </div>
                    <div>JavaScript</div>
                    
                </div>


                {/* back-end- */}


                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <SiMongodb />
                    </div>
                    <div>MongoDb</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <FaNodeJs />
                    </div>
                    <div>NodeJS</div> 

                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"> <SiExpress />

                    </div>
                    <div>ExpressJS</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><IoLogoFirebase />
                    </div>
                    <div>Firebase</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><DiGoogleCloudPlatform />

                    </div>
                    <div>GoogleCloud</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><MdError />


                    </div>
                    <div>error Solve</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><FaWordpress />
                    </div>
                    <div>WordPress</div>   
                </div>
                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><SiNetlify />

                    </div>
                    <div>Netlifi</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><SiReactrouter/> 

                    </div>
                    <div>ReactRouter</div>   
                </div>
                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><FaFigma />
                    </div>
                    <div>Figma</div>   
                </div>

                <div className="shadow-2xl rounded-lg flex items-center px-2 py-2 gap-3 text-green-400 font-bold">
                    <div className="text-xl"><CgDebug />

                    </div>
                    <div>Debuging</div>   
                </div>
  
            </div> 
        </div>

        </div> 
    </div>
   
  )
}
