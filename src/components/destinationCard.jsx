import React from "react";

const DestinationCard = (props) => {
    const { name, location, price, image} = props;
    return (
        <>
            <div className="my-5 ">
                <div className="flex justify-center sm:px-0 xs:px-20 px-5">
                    <div className="flex justify-end items-end w-full bg-cover h-[26rem] xs:w-[20rem] mx-auto" style={{backgroundImage: `url(${image})`}}>
                        <div className="bg-white bg-opacity-50  absolute">
                            <div className=" w-44 px-3 pb-5 pt-3 backdrop-blur-xl">
                                <div className="relative">
                                    <h1 className="text-sm font-semibold text-[#103445]">{name}</h1>
                                    <p className="text-[12px] my-1">{location}</p>
                                    <p className="font-bold text-[12px] text-[#103445]">{price}</p>
                                </div>
                            </div>                                                      
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestinationCard;