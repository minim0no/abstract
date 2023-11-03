import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Models from "./pages/Models";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

function App() {
    const [loginOpen, setLoginOpen] = useState(false);

    const toggleLogin = () => {
        setLoginOpen(!loginOpen);
    };

    return (
        <>
            <Login loginOpen={loginOpen} toggleLogin={toggleLogin} />
            <Navbar toggleLogin={toggleLogin} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/models" element={<Models />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
