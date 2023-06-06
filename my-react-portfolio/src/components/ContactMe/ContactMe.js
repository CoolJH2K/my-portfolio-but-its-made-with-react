// Import React, other components, and CSS
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import "./ContactMe.css";

// Create ContactMe function
function ContactMe() {
    return (
        <section>
            <h2>Contact Me</h2>
            <div>
                <address>
                    <ul>
                        <li><em>Phone Number: </em>407.330.8991</li>
                        <li><em>Email: </em>harmonjanna00@gmail.com</li>
                        <li><em>GitHub: </em>CoolJH2K</li>
                    </ul>
                </address>
            </div>
        </section>
    );
}