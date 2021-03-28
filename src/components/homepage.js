import React from 'react';
import HeaderSection from './headerSection';
import AboutMe from './aboutMe';
import '../App.css';


const HomePage = () =>{  
    return (
      <div className = 'homePage'>
          <h2>CHANDRA KIRAN ADDAGARLA</h2>
          <HeaderSection />
          <AboutMe />          
      </div>  
    )
};

export default HomePage;