import React from "react";
import Nav from "../components/nav";

const Header = () => {
    return (
        <>
       <section className="font-poppins">
        <div className="absolute w-full z-10">
          <Nav />
        </div>
        <div className="py-6  px-5 xs:absolute sm:px-9 sm:py-8 xs:px-6 lg:px-20 xl:px-24">
          <h1 className="mt-[4.5rem] lg:mt-[6.5rem] font-semibold xs:font-medium xl:text-[2.5rem] xl:w-[28rem] lg:text-[2.3rem] lg:w-[25.5rem] lg:leading-normal md:text-[1.7rem] md:w-[19rem] text-[1.35rem] xs:leading-9 md:leading-relaxed w-60 leading-normal text-[#0E3344] xs:w-[16.5rem] xs:text-2xl xs:text-white">Discover the beautiful place in the world with us</h1>
          <p className=" w-[17.4rem] sm:w-[20rem] mt-4 text-[#d1d1d1ef] xs:text-[#dddcdcef] lg:text-[13px] lg:w-[23rem] mb-6 text-sm xs:text-[12px] xs:font-thin">Discover the most beautiful place in the world you've never been with us</p>
          <a href="" className="bg-[#0E3344] py-[10px] px-5 rounded-full text-[11px] xs:px-6 sm:px-7 lg:px-10 lg:py-[0.85rem] text-white">Get Started</a>
        </div>
        <div className="">
         <div className="mt-5 xs:mt-0 bg-cover bg-right md:bg-center w-full h-[60vh] lg:h-[630px] md:h-[500px] flex " style={{backgroundImage: 'url("./images/boot.png")'}}>
        </div>
        </div>
      </section>
      </>
    )
}

export default Header;