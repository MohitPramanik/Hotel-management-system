import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
    const socialMedia = [
        {
            id: 1,
            icon: <FaFacebookF />,
            link: "#",
        },
        {
            id: 2,
            icon: <FaLinkedin />,
            link: "#",
        },
        {
            id: 3,
            icon: <AiFillInstagram />,
            link: "#",
        },
        {
            id: 4,
            icon: <FaXTwitter />,
            link: "#",
        },
    ];

    const aboutUs = [
        {
            text: "About Us",
            path: "",
        },
        {
            text: "Careers",
            path: "",
        },
        {
            text: "Blog",
            path: "",
        },
        {
            text: "Press room",
            path: "",
        },
    ];

    const resources = [
        {
            text: "Our Work",
            path: "",
        },
        {
            text: "Services",
            path: "",
        },
        {
            text: "FAQ",
            path: "",
        },
    ];

    return (
        <footer>
            <div className="footer-part">
                <h2>Logo</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo aliquam illum qui? Accusantium voluptates dignissimos
                    ab amet? Doloribus voluptates tenetur blanditiis
                    voluptatibus? Impedit nemo nihil neque quibusdam, laborum
                    illum nobis.
                </p>

                <ul className="social-media-links">
                    {socialMedia.map((item) => (
                        <li key={item.id}>
                            <a href={item.link}>{item.icon}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer-part">
                <h2>About Us</h2>
                <ul className="rest-links">
                    {aboutUs.map((item) => (
                        <li key={item.text}>
                            <NavLink to={item.path}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer-part">
                <h2>Resources</h2>
                <ul className="rest-links">
                    {resources.map((item) => (
                        <li key={item.text}>
                            <NavLink to={item.path}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer-part">
                <h2>Contact Us</h2>
                <div>
                    <p>
                        <a href="mail">mohitpramanik548@gmail.com</a>
                    </p>
                    <p>
                        <a href="tel">+91 128495924</a>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates vero magnam sed amet ipsum in vel molestiae,
                        sequi doloremque, tempora ipsa unde perspiciatis rem
                        consequuntur aliquid! Doloremque qui quos minus.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
