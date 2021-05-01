import React, {useState, useEffect} from "react";



const HomePage = () => {

    const profileUrl =  "" ;

    return(
        <div id="HomeContainer" className="d-flex justify-content-center primary-section-container home-background">
            <div className="align-self-center">
            <img src="https://res.cloudinary.com/dz6oeh4ym/image/upload/v1619882372/kiranaddagarla_personal_profile_image.jpg" className="profile-image" alt="Kiran's Profle"></img>
            <h3>Chandra Kiran Addagarla</h3>
            <h3>I am a full stack developer</h3>
            </div>
        </div>
    ) 
};

export default HomePage;