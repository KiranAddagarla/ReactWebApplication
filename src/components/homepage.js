import React from 'react';
import HeaderSection from './headerSection';
import AboutMe from './aboutMe';
import '../App.css';


const HomePage = () =>{  
    return (
      <div className = 'homePage'>
          <HeaderSection />
          <AboutMe />          
      </div>  
    )
};

export default HomePage;