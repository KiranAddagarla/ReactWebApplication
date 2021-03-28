import React from 'react';
import HeaderSection from './headerSection'
import '../App.css';


const HomePage = () =>{  
    return (
      <div>
          <HeaderSection />
          <AboutMe />
          {/* <ProfessionalSummary />
          <TechnologicalExpertise />
          <ProjectsHandled />
          <ContactMe /> */}
          
      </div>  
    )
};

export default HomePage;