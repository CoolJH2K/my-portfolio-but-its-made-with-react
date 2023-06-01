// Reference used: https://makeschool.org/mediabook/oa/tutorials/react-fundamentals-vm0/build-a-header-component/
// Import React, other components, and CSS
import React from "react";
import Footer from "../Footer/Footer";
import Navigation from  "../Navigation/Navigation"
import "./Header.css";

// Create Header function
function Header() {
    return (
        <header>
            <h1>Janna's React Portfolio</h1>
        </header>
    );
}

// Export Header
export default Header;