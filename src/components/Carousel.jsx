import React, { useRef, useState } from "react";
import "./Carousel.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Carousel() {
    const slider = useRef(null);
    const [slideNo, setSlideNo] = useState(1);

    const handleLeftClick = () => {
        slider.current.style.transform = `translateX( -${slideNo * 100}vw)`;
        setSlideNo((prev) => (prev + 1) % 3);
    };

    const handleRightClick = () => {
        slider.current.style.transform = `translateX(-${slideNo * 100}vw)`;
        setSlideNo((prev) => (prev == 3 ? 0 : prev == 1 ? 2 : prev - 1));
    };

    return (
        <section id="carousel">
            <div className="slide-container" ref={slider}>
                <div className="slide red"></div>
                <div className="slide green"></div>
                <div className="slide blue"></div>
            </div>

            <div className="slide-btns">
                <button onClick={handleLeftClick}>
                    <FaArrowLeftLong />
                </button>
                <button onClick={handleRightClick}>
                    <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
}

export default Carousel;
