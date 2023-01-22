import React from "react";


const Footer = () => {
    return (
        <> 
            <footer className="bg-[#087A85] lg:flex text-white xs:pl-6 xl:py-20 xs:pr-8 sm:px-10 pr-5 pl-4 xl:px-16 py-7 lg:pr-10 md:pr-0 font-poppins mt-10">
                <div className="md:flex md:items-center xl:items-start">
                    <div className="md:mt-10 xl:mt-0">
                        <div className="flex xs:font-medium">
                            <img src="/icons/boat.svg" alt="" className="w-[1.5rem]"/>
                            <h4 className="ml-2 mt-2 text-[1.1rem] xs:text-lg">Trabot</h4>
                        </div>
                        <p className="text-[14px] my-7 xs:text-[16px] w-[20rem]  xs:w-[22rem]">Trabot is a platform that aims to help you travel around the world easily & quickly</p>
                        <ul>
                            <li className="flex items-center">
                                <img src="/icons/call.svg"  alt=""  className="w-3"/>
                                <p className="text-[11px] xs:text-[12px] ml-[0.7rem] text-slate-200">Cilegon, Indonesia</p>
                            </li>
                            <li className="flex items-center my-5">
                                <img src="/icons/call.svg"  alt=""  className="w-3"/>
                                <p className="text-[11px] xs:text-[12px] ml-[0.7rem] text-slate-200">+62877741174222</p>
                            </li>
                            <li>
                                <p className="text-[10px] xs:text-[11px] text-slate-200">www.Trabot.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between mt-9 xl:mt-0 sm:mt-12 md:mb-[3.5rem] xl:ml-40 m">
                        <ul className="md:w-20 md:ml-14  ">
                            <li>
                                <h1 className="text-[17px] xs:text-lg ">Menu</h1>
                            </li>
                            <li><p className="text-[12px] xs:text-sm text-slate-300 mt-4">Home</p></li>
                            <li><p className="text-[12px] xs:text-sm text-slate-300 mt-4">About us</p></li>
                            <li><p className="text-[12px] xs:text-sm text-slate-300 mt-4">Place</p></li>
                            <li><p className="text-[12px] xs:text-sm text-slate-300 mt-4">Gallery</p></li>
                            <li><p className="text-[12px] xs:text-sm text-slate-300 mt-4">Blog</p></li>
                        </ul>
                        <ul className="sm:pr-[10rem] lg:pr-7 ml-20 ">
                            <li>
                                <h1 className="xs:text-lg  w-40 ">Stay Connected</h1>
                            </li>
                            <li><p className="text-[12px]  xs:text-sm text-slate-300 mt-4">Facebook</p></li>
                            <li><p className="text-[12px]  xs:text-sm text-slate-300 mt-4">Instagram</p></li>
                            <li><p className="text-[12px]  xs:text-sm text-slate-300 mt-4">Twitter</p></li>
                        </ul>
                    </div>
                </div>
                <div className="xl:ml-4 ">
                    <h1 className="text-xl mt-10 xl:mt-0 mb-5">Newsletter !</h1>
                    <form action="" className="lg:flex">
                        <input type="text" placeholder="Enter your email" className="p-[0.6rem] text-slate-500 xl:w-60 w-52 text-[11px]"/>
                        <button className="bg-[#0E3344] p-[0.6rem] text-[11px]">Kirim</button>
                    </form>
                </div>
            </footer>
        </>
    )
}

export default Footer;
