import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="hero">
                <div className="hero-container">
                    <h1>
                        <span className="hero-keyword">Transform</span> your
                        view
                    </h1>
                    <div className="hero-text">
                        Unveil your inner{" "}
                        <span className="hero-keyword">creativity</span>! Begin
                        your journey here and share your mesmerizing{" "}
                        <span className="hero-keyword">masterpieces</span> with
                        the <span className="hero-keyword">world</span>.{" "}
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
