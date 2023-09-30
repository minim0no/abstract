import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
    //checks for scrolling and changes navbar border
    const [isScrolled, setIsScrolled] = useState(false);

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

    //checks for menu open and changes menu icon
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
            <div className="left">
                <div className="logo">
                    <Link to="/" className="site-title">
                        abstract
                    </Link>
                </div>
                <div
                    className="menu"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}
                >
                    <FaBars
                        className={"menu-icon"}
                        display={`${!menuOpen ? "block" : "none"}`}
                    />
                    <FaTimes
                        className={"menu-icon"}
                        display={`${menuOpen ? "block" : "none"}`}
                    />
                </div>
            </div>
            <div className="right">
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" id="log-in-button">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
