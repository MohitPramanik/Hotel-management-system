import React, { useContext, useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { RoomContext } from "../contexts/RoomContext";

function SideBar({ showFilter }) {
    const filters = useContext(RoomContext);
    const location = useRef(null);
    const priceRange = useRef(null);
    const rating = useRef(null);

    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const amenities = [
        { id: "free-wifi", text: "Free Wi-Fi", isChecked: false },
        { id: "air-conditioning", text: "Air Conditioner", isChecked: false },
        { id: "flat-screen-tv", text: "Flat Screen TV", isChecked: false },
        { id: "room-service", text: "Room Service", isChecked: false },
        { id: "mini-bar", text: "Mini Bar", isChecked: false },
        { id: "balcony", text: "Balcony", isChecked: false },
        { id: "kitchenette", text: "Kitchenette", isChecked: false },
    ];

    const handleApply = () => {
        filters.setFilters({
            location: location.current.value,
            priceRange: priceRange.current.value,
            rating: rating.current.value,
            // amenities:
        });

        console.log(filters.filters);
    };

    const handleCheckedAmenities = () => {
        setSelectedAmenities(() =>
            amenities.filter((item) => item.isChecked === true)
        );
        console.log(selectedAmenities);
    };

    return (
        <div id="sidebar" className={`${!showFilter && "hide-filter"}`}>
            <div>
                <h3>Location</h3>
                <input
                    type="text"
                    name=""
                    ref={location}
                    placeholder="Enter Location"
                />
            </div>

            <div>
                <h3>Price Range</h3>
                <select name="" ref={priceRange}>
                    <option value=""> Select price </option>
                    <option value="1000 to 1500">Rs. 1000 - 1500</option>
                    <option value="1500 to 2000">Rs. 1500 - 1500</option>
                    <option value="2000 to 2500">Rs. 2000 - 2500</option>
                    <option value="2500 to 3000">Rs. 2500 - 3000</option>
                    <option value="above 3000">Above 3000</option>
                </select>
            </div>

            <div>
                <h3>Rating</h3>
                <select name="" id="" ref={rating}>
                    <option value="all">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div>
                <h3>Amenities</h3>
                {amenities.map((item) => (
                    <p key={item.id}>
                        <input
                            type="checkbox"
                            name=""
                            id={item.id}
                            checked={item.isChecked}
                            onChange={handleCheckedAmenities}
                        />
                        <label htmlFor={item.id}>{item.text}</label>
                    </p>
                ))}
            </div>

            <button onClick={handleApply}>Apply Filter</button>
        </div>
    );
}

export default SideBar;
