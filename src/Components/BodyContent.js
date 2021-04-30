import React from "react";
import HomePage from "./HomePage";
import ContactMe from "./ContactMe";

const BodyContent = () => {
    return (
        <React.Fragment>
            <div data-bs-spy="scroll" data-bs-target="#layout-navbar" data-bs-offset="0" tabindex="0" >
                <HomePage />
                <ContactMe />
            </div>
        </React.Fragment>
    )

};

export default BodyContent;