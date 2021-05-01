import React, {useState, useEffect} from "react";
import CloudinaryAPIService from "../APIComponents/CloudinaryAPIService";


const HomePage = () => {

    const [profileImage, setProfileImage] = useState(null)   ;

    useEffect (()=>{
        const profileUrl = await CloudinaryAPIService.get("kiranaddagarla_personal_profile_image.jpg");
        setProfileImage(profileUrl);
    },[])

    return(
        <div id="HomeContainer" className="d-flex justify-content-center primary-section-container home-background">
            <div className="align-self-center">
                <img src={profileUrl} className="profile-image" alt="Kiran's Profle"></img>
            </div>
        </div>
    ) 
};

export default HomePage;