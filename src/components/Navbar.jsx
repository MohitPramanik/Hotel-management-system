import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import dummyProfile from "../assets/Navbar/dummyProfile.webp";
import hotelLogo from "../assets/Navbar/hotelLogo.png";
import { Divide as Hamburger } from "hamburger-react";

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
                <span className="logo-box">
                    <img src={hotelLogo} alt="" />
                </span>

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

                <button className="hamburger">
                    <Hamburger />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
