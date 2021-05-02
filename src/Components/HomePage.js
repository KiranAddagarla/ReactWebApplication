import React, {useState, useEffect} from "react";
import Carosol from "./Carosol";



const HomePage = () => {

    const profileUrl =  "" ;

    return(
        <div id="HomeContainer" className="d-flex justify-content-center primary-section-container home-background home-background-overlay">
            <div className="align-self-center">
            <Carosol />
            </div>
        </div>
    ) 
};

export default HomePage;