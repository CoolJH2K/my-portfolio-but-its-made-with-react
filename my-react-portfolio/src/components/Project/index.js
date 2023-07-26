// Import React, other components, and CSS
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Homepage from "../Homepage";
import "./Project.css";

// Create Project function
function Project() {
    return (
        <body>
            <Header />
                <Homepage />
            <Footer />
        </body>
    )
}

// Export Project
export default Project;