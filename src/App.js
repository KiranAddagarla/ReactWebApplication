import React from 'react';
import Layout from './Components/Layout';
import HomePage from './components/homepage';
import ContactMe from "./Components/ContactMe";
import "./App.css";
import Portfolio from './Components/Portfolio';
import FeedBack from "./Components/FeedBack";


const headerButtonsMap = [
    {
      buttonName: "Home",
      sectionId : "HomeContainer"
    },
    {
      buttonName: "Portfolio",
      sectionId : "portfolioConatiner"
    },
    {
      buttonName: "Contact Me",
      sectionId : "contactMeConatiner"
    },{
      buttonName: "Feedback",
      sectionId : "feedbackConatiner"
    }
  ]

const App = () => {
  
    return (
      <React.Fragment>
        <Layout headerButtons={headerButtonsMap} ></Layout>
        <HomePage />
        <Portfolio />
        <ContactMe />
        <FeedBack />
      </React.Fragment> 
      )
};

export default App;