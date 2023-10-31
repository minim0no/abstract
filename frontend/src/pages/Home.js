import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-container">
                    <h1 className="hero-title">
                        <span className="hero-keyword">Transform</span> your
                        view
                    </h1>
                    <div className="hero-text">
                        Unveil your inner creativity!{" "}
                        <span className="hero-keyword">Begin your journey</span>{" "}
                        here and share your mesmerizing masterpieces with the{" "}
                        <span className="hero-keyword">world</span>.{" "}
                    </div>
                    <Link to="/login" className="get-started-button">
                        Get Started
                    </Link>
                </div>
                <div className="hero-image">placeholder</div>
            </div>
        </div>
    );
}
