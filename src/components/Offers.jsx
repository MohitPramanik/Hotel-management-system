import React from "react";
import img1 from "../assets/Carousel/img2.jpg";
import OfferCard from "./OfferCard";
import "./Offers.css";

function Offers() {
    const offers = [
        {
            id: 1,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam illo ipsum delectus possimus odit quasi dignissimos? Harum, facere ea!",
        },
        {
            id: 2,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam illo ipsum delectus possimus odit quasi dignissimos? Harum, facere ea!",
        },
        {
            id: 3,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam illo ipsum delectus possimus odit quasi dignissimos? Harum, facere ea!",
        },
    ];

    return (
        <section id="offers">
            <h2>Limited Time Offers</h2>
            <div className="offers-card-area">
                {offers.map((item) => (
                    <OfferCard offerData={item} />
                ))}
            </div>
        </section>
    );
}

export default Offers;
