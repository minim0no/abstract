import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
                            <a
                                href="https://github.com/Indred/abstract"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    style={{
                                        color: "#d68249",
                                        height: "1.5rem",
                                    }}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ahmed-idrees"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    style={{
                                        color: "#d68249",
                                        height: "1.5rem",
                                    }}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="column-container">
                    <ul className="footer-column">
                        <li>
                            <Link to="/discover">Discover</Link>
                        </li>
                        <li>
                            <Link to="/models">Models</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/login">Sign in</Link>
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
                            <Link to="#">some other shit idk</Link>
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
