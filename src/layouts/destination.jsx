import React from "react";
import DestinationCard from "../components/destinationCard.jsx";

let destinations = [
    { id: 1, name:"Lake Toba", location: "Sumatera Utara,Indonesia", price:"$200", image: "./images/destination/destination_1.png"},
    { id: 2, name:"Raja Ampat", location: "Papua,Indonesia, Indonesia", price:"$400", image: "./images/destination/destination_2.png"},
    { id: 3, name:"Norway sea", location: "Norwegia", price:"$500", image: "./images/destination/destination_3.png"},
    { id: 4, name:"Beach North", location: "California,United State", price:"$700", image: "./images/destination/destination_4.png"},
    { id: 5, name:"Mount Fuji", location: "Tokyo,Japan", price:"$600", image: "./images/destination/destination_5.png"},
    { id: 6, name:"Paris", location: "France", price:"$900", image: "./images/destination/destination_6.png"},
    { id: 7, name:"Chaws", location: "Ga tau dimana", price:"$310", image: "./images/destination/destination_7.png"},
    { id: 8, name:"Lugowo", location: "Isekai", price:"$540", image: "./images/destination/destination_8.png"},
    { id: 9, name:"Jowns", location: "Deep Mariana", price:"$1100", image: "./images/destination/destination_9.png"},
    { id: 10, name:"Santorini", location: "Cyclades, Aegean Islands", price:"$920", image: "./images/destination/destination_10.png"},
    { id: 11, name:"Luxie", location: "I dont know, sry", price:"$490", image: "./images/destination/destination_11.png"},
    { id: 12, name:"Safielc", location: "Swedia", price:"$780", image: "./images/destination/destination_12.png"}
];

const Destination = () => {
    return (
        <>
        <section className="font-poppins">
            <div className="flex flex-col items-center xl:mt-52 mt-16 xs:mt-20 sm:mt-36">
                <p className="text-[12px] font-semibold text-[#097882]">Our destination</p>
                <h1 className="px-20 text-center font-semibold mt-1 text-2xl sm:w-full xs:text-[1.6rem] xs">Recommended Destination For You</h1>
            </div>
            <div className="mt-7 sm:grid sm:grid-cols-2 sm:px-5 gap-5 md:grid-cols-3 xl:grid-cols-4 lg:px-10">
                {
                    destinations.map((destination)=>(
                        <DestinationCard key={destination.id} name={destination.name} location={destination.location} price={destination.price} image={destination.image} />
                    ))
                }
            </div>

            <div className=" w-full my-10 text-center sm:mt-16 text-white">
            <a href="/" className="bg-[#0E3344] text-[12px] px-28 rounded-full py-4">Show More</a>
            </div>
        </section>
        </>
    )
}

export default Destination