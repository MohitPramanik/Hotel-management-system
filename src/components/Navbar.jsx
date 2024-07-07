import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import dummyProfile from "../assets/Navbar/dummyProfile.webp";

function Navbar() {
    const menu = [
        {
            text: "Home",
            path: "",
        },
        {
            text: "Rooms",
            path: "rooms",
        },
        {
            text: "Bookings",
            path: "bookings",
        },
    ];

    return (
        <header>
            <nav>
                <span>Hotel Logo</span>

                <ul>
                    {menu.map((menuItem) => (
                        <li key={menuItem.text}>
                            <NavLink to={menuItem.path}>
                                {menuItem.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button className="profile-btn">
                    <NavLink to={"profile"}>
                        <img src={dummyProfile} alt="" />
                    </NavLink>
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
