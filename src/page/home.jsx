import React from "react"
import Header from "../layouts/header.jsx";
import Point from "../layouts/point.jsx";
import Destination from "../layouts/destination.jsx";
import Blog from "../layouts/blog.jsx";
import Footer from "../layouts/footer.jsx";

const Home = () => {
    return (
        <>
            <main className="overflow-x-hidden">
                <Header />
                <Point />
                <Destination />
                <Blog />
                <Footer />
            </main>
        </>
    )
}

export default Home
