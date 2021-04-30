import React from 'react';
import Layout from './Components/Layout';
// import HomePage from "./Components/HomePage";
// import FeedBack from "./Components/FeedBack";
// import ContactMe from "./Components/ContactMe";
// import { BrowserRouter, Route } from 'react-router-dom';


const headerButtonsMap = [
    {
      buttonName: "Home",
      href : "#HomeContainer"
    },
    {
      buttonName: "Portfolio",
      href : "#portfolioContainer"
    },
    {
      buttonName: "About Me",
      href : "#aboutMeContainer"
    },
    {
      buttonName: "Contact Me",
      href : "#contactMeConatiner"
    }
  ]

const App = () => {
    return (
        <Layout headerButtons={headerButtonsMap}/>
    );
};

export default App;