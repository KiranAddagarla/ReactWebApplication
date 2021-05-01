import React, {useState, useEffect} from "react";
import CloudinaryAPIService from "../APIComponents/CloudinaryAPIService";


const HomePage = () => {

    const [profileImage, setProfileImage] = useState(null)   ;

    useEffect ( async () =>{
        const profileUrl = await CloudinaryAPIService.get("kiranaddagarla_personal_profile_image.jpg");
        setProfileImage(profileUrl);
    },[])

    return(
        <div id="HomeContainer" className="d-flex justify-content-center primary-section-container home-background">
            <div className="align-self-center">
                <div className="profile-image">{profileImage}</div>
            </div>
        </div>
    ) 
};

export default HomePage;