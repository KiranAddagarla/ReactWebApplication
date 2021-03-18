import React from 'react';
import '../App.css';
import Background from '../mediaFiles/homepage_background.jpg';

const HomePage = () =>{  
    return (
      <div>
          <div class="parallax">
              <img src={Background}></img>
          </div>
          <p>check home page parallex effect on the website hopefully this works as expected.</p>
      </div>  
    )
};

export default HomePage;