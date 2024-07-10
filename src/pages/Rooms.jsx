import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import SideBar from "../components/SideBar";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { RoomContext } from "../contexts/RoomContext";
import "./Rooms.css";

function Rooms() {
    const [showFilter, setShowFilter] = useState(false);
    const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);

    const rooms = useContext(RoomContext);

    return (
        <div id="rooms">
            <SideBar showFilter={showFilter} />
            <section id="room-card-container">
                {rooms.rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </section>

            <button
                className={`filter-toggle ${showFilter && "blue"}`}
                onClick={() => setShowFilter((prev) => !prev)}
            >
                <FaFilter />
            </button>

            <button
                className={`move-up-btn ${showScrollToTopBtn && "show-up-btn"}`}
            >
                <IoIosArrowUp />
            </button>
        </div>
    );
}

export default Rooms;
