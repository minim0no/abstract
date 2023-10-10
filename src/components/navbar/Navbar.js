import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
    //checks for scrolling and changes navbar border
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(menuOpen);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <Link to="/" className="site-title">
                    abstract
                </Link>
            </div>
            <div className="menu" onClick={toggleMenu}>
                <FaBars className={`menu-icon ${!menuOpen ? "" : "hidden"}`} />
                <FaTimes className={`menu-icon ${!menuOpen ? "hidden" : ""}`} />
            </div>
            <div className={`right ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li className="menu-close">
                        <FaTimes
                            onClick={toggleMenu}
                            className={`menu-icon ${!menuOpen ? "hidden" : ""}`}
                        />
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink to="/discover">Discover</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink to="/models">Models</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink to="/login" id="log-in-button">
                            Sign in
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
