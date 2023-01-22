import React, { useState } from 'react'

const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"Place",link:"/"},
      {name:"Gallery",link:"/"},
      {name:"Blog",link:"/"},
    ];
    
    let [open,setOpen]=useState(false);

  return (
    <div className='w-full'>
      <div className={`md:flex items-center justify-between h-20 md:px-10 transition-all duration-500 ease-in ${open ?  'bg-white shadow-lg shadow-white md:bg-transparent md:shadow-none':'shadow-none'}`}>
        <div className={ `font-bold text-2xl cursor-pointer transition-all duration-500 ease-in flex px-7 py-4 items-center font-[Poppins] 
        text-gray-800`}>
          <div className="flex xs:font-medium ">
              <img src="/icons/boat.svg" alt="boat" loading="lazy" className="w-[1.7rem]"/>
              <h4 className={`ml-2 mt-2  text-sm xs:text-lg font-semibold ${open ? 'md:text-white text-[#0E3344] ' : 'text-[#0E3344] xs:text-white'}`}>Terabot</h4>
          </div>
        </div> 
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-[1.45rem] cursor-pointer md:hidden'>
          <div name={open ? 'close':'menu'} className="">
            <img src="/icons/menu.svg" alt="menu" loading="lazy" className={`w-[1.35rem] ${open ? 'hidden':'xs:block hidden'}`}/>
            <img src="/icons/menu_black.svg" alt="menu" loading="lazy" className={`w-[1.35rem] ${open ? 'block':'block xs:hidden'}`}/>
          </div>
        </div>
      <ul className={`md:flex  md:items-center md:pb-0 pb-12 mx-auto absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?  'top-14 shadow-xl shadow-white md:shadow-none md:bg-transparent bg-white text-[#0E3344] md:text-white':'top-[-490px] text-white md:bg-transparent'}`}>

        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8  md:my-0 xs:my-10 my-8  '>
              <a href={link.link} className='duration-500 xs:text-normal text-sm'>{link.name}</a>
            </li>
          ))
        }
        <div className='md:hidden block'>
          <a href="" className="bg-[#0E3344] py-[10px] px-5 rounded-md text-[11px] xs:px-6 sm:px-7 text-white">Login</a>
        </div>
      </ul>
        <div className='hidden md:block'>
          <a href="" className="bg-[#0E3344] py-[10px] px-5 rounded-full text-[11px] xs:px-6 sm:px-7 lg:px-8 lg:py-[0.55rem] text-white">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
