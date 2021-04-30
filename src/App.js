import React from 'react';
import Layout from './Components/Layout';
//import BodyContent from "./Components/BodyContent";



const headerButtonsMap = [
    {
      buttonName: "Home",
      href : "#HomeContainer"
    },
    // {
    //   buttonName: "Portfolio",
    //   href : "#portfolioContainer"
    // },
    // {
    //   buttonName: "About Me",
    //   href : "#aboutMeContainer"
    // },
    {
      buttonName: "Contact Me",
      href : "#contactMeConatiner"
    }
  ]

const App = () => {
    return (
      <React.Fragment>
        <Layout headerButtons={headerButtonsMap} ></Layout>
        {/* <BodyContent ></BodyContent>   */}
      /</React.Fragment> 
      )
};

export default App;