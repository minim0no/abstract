import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <div className="main-footer">
                <div className="footer-top">
                    <Link to="/" className="footer-title">
                        abstract
                    </Link>
                    <ul className="social-list">
                        <li>
                            <Link to="#">Github</Link>
                        </li>
                        <li>
                            <Link to="#">LinkedIn</Link>
                        </li>
                    </ul>
                </div>
                <div className="column-container">
                    <ul className="footer-column">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                    <ul className="footer-column">
                        <li>
                            <Link to="#">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="#">Accessibility</Link>
                        </li>
                        <li>
                            <Link to="#">IDK</Link>
                        </li>
                    </ul>
                </div>
                <div className="sub-footer">
                    <p>© Copyright 2023 Ahmed Idrees </p>
                </div>
            </div>
        </>
    );
}
