import React from "react";
import "./FacilitiesCard.css";

function FacilitiesCard({ facility }) {
    return (
        <div className="facilities-card">
            <img src={facility.image} alt="" />
            <div className="content">
                <h3>{facility.title}</h3>
                <p>{facility.describe}</p>
            </div>
        </div>
    );
}

export default FacilitiesCard;
