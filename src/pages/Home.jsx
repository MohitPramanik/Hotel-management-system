import React from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Offers from "../components/Offers";
import Facilities from "../components/Facilities";

function Home() {
    return (
        <>
            <Carousel />
            <About />
            <Offers />
            <Facilities />
        </>
    );
}

export default Home;
