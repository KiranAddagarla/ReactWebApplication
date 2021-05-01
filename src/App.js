import React from 'react';
import Layout from './Components/Layout';
import HomePage from './components/homepage';
import ContactMe from "./Components/ContactMe";
import "./App.css";


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