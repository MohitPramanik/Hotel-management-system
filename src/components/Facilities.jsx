import React from "react";
import "./Facilites.css";
import img1 from "../assets/Carousel/img2.jpg";
import FacilitiesCard from "./FacilitiesCard";

function Facilities() {
    const facilites = [
        {
            id: 1,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos dolor ab quia sed fugiat consequuntur soluta deleniti praesentium pariatur. Cupiditate, deleniti exercitationem modi corrupti, error laboriosam, commodi recusandae animi consequuntur quasi magni numquam labore ex illo culpa obcaecati aut?",
        },
        {
            id: 2,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos dolor ab quia sed fugiat consequuntur soluta deleniti praesentium pariatur. Cupiditate, deleniti exercitationem modi corrupti, error laboriosam, commodi recusandae animi consequuntur quasi magni numquam labore ex illo culpa obcaecati aut?",
        },
        {
            id: 3,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos dolor ab quia sed fugiat consequuntur soluta deleniti praesentium pariatur. Cupiditate, deleniti exercitationem modi corrupti, error laboriosam, commodi recusandae animi consequuntur quasi magni numquam labore ex illo culpa obcaecati aut?",
        },
        {
            id: 4,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos dolor ab quia sed fugiat consequuntur soluta deleniti praesentium pariatur. Cupiditate, deleniti exercitationem modi corrupti, error laboriosam, commodi recusandae animi consequuntur quasi magni numquam labore ex illo culpa obcaecati aut?",
        },
        {
            id: 5,
            image: img1,
            title: "Title",
            describe:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos dolor ab quia sed fugiat consequuntur soluta deleniti praesentium pariatur. Cupiditate, deleniti exercitationem modi corrupti, error laboriosam, commodi recusandae animi consequuntur quasi magni numquam labore ex illo culpa obcaecati aut?",
        },
    ];

    return (
        <section id="facilities">
            <h2>Facilities we provide</h2>
            {facilites.map((facility) => (
                <FacilitiesCard key={facility.id} facility={facility} />
            ))}
        </section>
    );
}

export default Facilities;
