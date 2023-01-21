import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#087A85] mt-20 px-3 py-9">
                <div>
                    <div className="flex">
                        <img src="/icons/boat.svg" alt="Trabot" loading="lazy" className="w-7"/>
                        <h4 className="ml-2 mt-2 font-semibold text-white">Terabot</h4>
                    </div>
                    <p className="text-white text-sm mt-5">Trabot is a platform that aims to help you travel around the world easily & quickly</p>
                    <ul className="mt-5">
                        <li className="flex">
                            <img src="/icons/map.svg" className="w-4" alt="" />
                            <p className="text-white text-[12px] ml-2">Cilegon, Indonesia</p>
                        </li>
                        <li className="flex mt-5">
                            <img src="/icons/map.svg" className="w-4" alt="" />
                            <p className="text-white text-[12px] ml-2">+6281290824132</p>
                        </li>
                        <li className="mt-5">
                            <p className="text-white text-[12px] ">www.Trabot.com</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
