// Import React and other components
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

// Create Project function
function Project(props) {
    const projectCard = {
        maxHeight: "400px",
        width: "800px",
    };

    return (
        <div className="container">
            <div className="project" style={projectCard}>
                <img
                    className=""
                    src={``}
                    alt=""
                />
            </div>
        </div>
    )
}

// Export Project
export default Project;