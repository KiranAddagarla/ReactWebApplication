import React from "react";

const Carosol = () => {
    return(
        <div id="demo" className="carousel slide">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://res.cloudinary.com/dz6oeh4ym/image/upload/v1619882372/kiranaddagarla_personal_profile_image.jpg" className="profile-image" alt="Kiran's Profle"></img>
                    <h3>Chandra Kiran Addagarla</h3>
                    <h3>Full Stack Developer</h3>
                </div>
                <div class="carousel-item">
                    <p>Second Carosol Screen</p>
                </div>
                <div class="carousel-item">
                    <p>Third carosol screen</p>
                </div>
            </div>
        </div>
        
    )


}

export default Carosol;