import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Login.css";

export default function Login({ loginOpen, toggleLogin }) {
    return (
        <div className={`login-page ${!loginOpen ? "hidden" : ""}`}>
            <div className="login-container">
                <FaTimes onClick={toggleLogin} className="login-icon" />
                <div className="log-in-button-container">
                    <a className="log-in-button">Sign in with Google</a>
                </div>
            </div>
        </div>
    );
}
