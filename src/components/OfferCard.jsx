import React from "react";
import "./OfferCard.css";

function OfferCard({ offerData }) {
    return (
        <div className="offer-card">
            <div>
                <img src={offerData.image} alt="Loading error" />
            </div>
            <div>
                <h3>{offerData.title}</h3>
                <p>{offerData.describe}</p>
            </div>
        </div>
    );
}

export default OfferCard;
