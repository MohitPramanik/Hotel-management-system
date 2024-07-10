import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./RoomCard.css";

function RoomCard({ room }) {
    return (
        <div className="room-card">
            <img src={room.image} alt="" />
            <div className="room-content">
                <div>
                    <h2>{room.type}</h2>
                    <p>Location: {room.location}</p>
                    <p>Price: Rs. {room.price}/day</p>
                    <p>{room.description}</p>

                    <ul>
                        {room.amenities.map((item) => (
                            <li key={item}>
                                <span>
                                    <FaCheckCircle />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    );
}

export default RoomCard;
