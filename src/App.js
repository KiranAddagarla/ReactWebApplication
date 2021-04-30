import React from 'react';
import Layout from './Components/Layout';
import HomePage from './components/homepage';
import ContactMe from "./Components/ContactMe";





const headerButtonsMap = [
    {
      buttonName: "Home",
      sectionId : "HomeContainer"
    },
    {
      buttonName: "Contact Me",
      sectionId : "contactMeConatiner"
    }
  ]

  console.log ("Moved the body content to app and modified to not have any scroll functions");
  
const App = () => {
  
    return (
      <React.Fragment>
        <Layout headerButtons={headerButtonsMap} ></Layout>
        <HomePage />
        <ContactMe />
      </React.Fragment> 
      )
};

export default App;