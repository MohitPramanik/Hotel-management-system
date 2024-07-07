import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img1 from "../assets/Carousel/img1.avif";
import img2 from "../assets/Carousel/img2.jpg";
import img3 from "../assets/Carousel/img3.jpg";

function Carousel() {
    const slider = useRef(null);
    const [slideNo, setSlideNo] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slides = [
        {
            id: 1,
            image: img1,
            title: "Slide 1",
            describe:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga architecto reiciendis optio. Saepe suscipit ad facilis delectus dicta, magni re rum pariatur.",
        },
        {
            id: 2,
            image: img2,
            title: "Slide 2",
            describe:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga architecto reiciendis optio. Saepe suscipit ad facilis delectus dicta, magni re rum pariatur.",
        },
        {
            id: 3,
            image: img3,
            title: "Slide 3",
            describe:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga architecto reiciendis optio. Saepe suscipit ad facilis delectus dicta, magni re rum pariatur.",
        },
    ];

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (slideNo === 0) {
            slider.current.style.transition = "none";
            setSlideNo(slides.length);
            slider.current.style.transform = `translateX(-${
                slides.length * 100
            }vw)`;
        } else if (slideNo === slides.length + 1) {
            slider.current.style.transition = "none";
            setSlideNo(1);
            slider.current.style.transform = `translateX(-100vw)`;
        }
    };

    useEffect(() => {
        if (!isTransitioning) return;
        slider.current.style.transition = "transform 0.5s ease-in-out";
        slider.current.style.transform = `translateX(-${slideNo * 100}vw)`;
    }, [slideNo, isTransitioning]);

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideNo((prev) => prev - 1);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setSlideNo((prev) => prev + 1);
    };

    return (
        <section id="carousel">
            <div
                className="slide-container"
                ref={slider}
                onTransitionEnd={handleTransitionEnd}
            >
                <div className="slide">
                    <img
                        src={slides[slides.length - 1].image}
                        alt={slides[slides.length - 1].title}
                    />
                    <div>
                        <h2>{slides[slides.length - 1].title}</h2>
                        <p>{slides[slides.length - 1].describe}</p>
                    </div>
                </div>

                {slides.map((slide) => (
                    <div className="slide" key={slide.id}>
                        <img src={slide.image} alt={slide.title} />
                        <div>
                            <h2>{slide.title}</h2>
                            <p>{slide.describe}</p>
                        </div>
                    </div>
                ))}
                <div className="slide">
                    <img src={slides[0].image} alt={slides[0].title} />
                    <div>
                        <h2>{slides[0].title}</h2>
                        <p>{slides[0].describe}</p>
                    </div>
                </div>
            </div>

            <div className="slide-btns">
                <button onClick={handlePrev}>
                    <FaArrowLeftLong />
                </button>
                <button onClick={handleNext}>
                    <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
}

export default Carousel;
