import React from 'react';
import Layout from './Components/Layout';
// import HomePage from "./Components/HomePage";
// import FeedBack from "./Components/FeedBack";
// import ContactMe from "./Components/ContactMe";
// import { BrowserRouter, Route } from 'react-router-dom';


const headerButtonsMap = [
    {
      buttonName: "Home",
      href : "/"
    },
    {
      buttonName: "Portfolio",
      href : "/portfolio"
    },
    {
      buttonName: "About Me",
      href : "/aboutme"
    },
    {
      buttonName: "Contact Me",
      href : "/contactme"
    }
  ]

const App = () => {
    return (
        <Layout headerButtons={headerButtonsMap}/>
    );
};

export default App;