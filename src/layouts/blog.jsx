import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardBlog from "../components/CardBlog";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css";

const blogs = [
    {   
        id: 1,
        image: "/images/blog/blog_1.png",
        title: "20+ Popular Destination",
        description: "We summarize 20 more tours based on most popular & frequently visited"
    },
    {   
        id: 2,
        image: "/images/blog/blog_2.png",
        title: "20+ Popular Destination",
        description: "We summarize 20 more tours based on most popular & frequently visited"
    },
    {   
        id: 3,
        image: "/images/blog/blog_3.png",
        title: "20+ Popular Destination",
        description: "We summarize 20 more tours based on most popular & frequently visited"
    },
    {   
        id: 4,
        image: "/images/blog/blog_3.png",
        title: "20+ Popular Destination",
        description: "We summarize 20 more tours based on most popular & frequently visited"
    },
];

const Blog = () => {
    return (
        <>
            <section className="mt-20 font-poppins xs:my-5 xl:my-44">
                <div className="text-center mt-20 mb-10">
                    <p className="text-[10px] font-semibold text-[#097A85]">Tips & Trick By Our Adventure</p>
                    <h1 className="text-2xl font-extrabold text-[#0E3344]">Blog</h1>
                </div>
                <div className="lg:px-20 xl:px-28">
                <Swiper
                    // Config
                    modules={[Navigation, Pagination, A11y]}
                    breakpoints={{
                        0 : {
                        slidesPerView: 1,
                        spaceBetween: 10
                        },
                        640 : {
                        slidesPerView: 2,
                        spaceBetween: 10
                        },
                        768 : {
                        slidesPerView: 3,
                        spaceBetween: 15
                        },
                        1024 : {
                        slidesPerView: 3,
                        spaceBetween: -30
                        },
                        1280 : {
                        slidesPerView: 3,
                        spaceBetween: -30
                        }
                    }}
                    pagination={{ clickable: true }}
                    navigation
                    className="mx-auto"
                    >
                        {
                            blogs.map(blog => {
                                return (
                                    <SwiperSlide key={blog.id}><CardBlog image={blog.image} title={blog.title} description={blog.description} /></SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Blog