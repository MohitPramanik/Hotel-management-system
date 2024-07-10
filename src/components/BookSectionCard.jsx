import React from "react";
import img1 from "../assets/Carousel/img2.jpg";
import { FaCheckCircle } from "react-icons/fa";
import "./BookSectionCard.css";

function BookSectionCard() {
    return (
        <div className="booksection-card">
            <img src={img1} alt="" />
            <div className="card-content">
                <div>
                    <h2>Single Room</h2>
                    <p>Location: Ranchi</p>
                    <ul>
                        <li>
                            <span>
                                <FaCheckCircle />
                            </span>
                            Free wifi
                        </li>
                        <li>
                            <span>
                                <FaCheckCircle />
                            </span>
                            Free wifi
                        </li>
                        <li>
                            <span>
                                <FaCheckCircle />
                            </span>
                            Free wifi
                        </li>
                        <li>
                            <span>
                                <FaCheckCircle />
                            </span>
                            Free wifi
                        </li>
                    </ul>

                    <p>Booking Date: 7/6/2024</p>
                    <p>Room Slot: 24/01/2024</p>
                </div>

                <div className="bottom-area">
                    <p>Price: Rs. 1000/day</p>
                    <button>Cancel booking</button>
                </div>
            </div>
        </div>
    );
}

export default BookSectionCard;
