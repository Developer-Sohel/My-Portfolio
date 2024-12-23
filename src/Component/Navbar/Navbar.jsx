import { FaCode } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import './navbar.css';


export const Navbar = () => {
    const navItems=[
        <Link to='/'><li className="text-slate-300 text-base mr-8 active effact ">Home</li></Link>,
        <Link to='/About'><li className="text-slate-300 text-base mr-8 effact">About</li></Link>,
        <Link to='/#Services'><li className="text-slate-300 text-base mr-8 effact">Services</li></Link>,
        <Link to='/Project'><li className="text-slate-300 text-base mr-8 effact">Project</li></Link>,
        <Link to='/Blog'><li className="text-slate-300 text-base mr-8 effact">Blog</li></Link>,
        <Link to='/Contact'><li className="text-slate-300 text-base mr-8 effact">Contact</li></Link>,
    ]




  return (
    <div className='bg-slate-700 shadow-md'>
        <div className="navbar lg:container lg:mx-auto  lg:px-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
<a className="btn btn-ghost text-xl font-bold text-green-500 "> <span><FaCode />
</span> DEVELOPER <span className="text-orange-400">SOHEL</span> </a>    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <div className="flex text-yellow-50  gap-6 text-xl sm:hidden">
    <FaGithub  className="bg-slate-800 w-7 h-7 py-1 px-1 rounded-full border border-green-500"/>
    <FaLinkedin className="bg-slate-800 w-7 h-7 py-1 px-1 rounded-full border border-green-500" />
    <FaInstagramSquare className="bg-slate-800 w-7 h-7 py-1 px-1 rounded-full border border-green-500" />


    </div> */}

    <button className="bg-primary text-white px-3 py-2 font-light rounded-md">Contact</button>
  </div>
</div>
    </div>
  )
}
