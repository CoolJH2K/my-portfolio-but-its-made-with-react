// Import React, other components, and CSS
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Navigation.css";

// Create Navigation function
function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

// Export Navigation
export default Navigation;