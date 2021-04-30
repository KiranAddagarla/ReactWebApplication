import React from 'react';
import Layout from './Components/Layout';
//import BodyContent from "./Components/BodyContent";



const headerButtonsMap = [
    {
      buttonName: "Home",
      href : "#HomeContainer"
    },
    {
      buttonName: "Contact Me",
      href : "#contactMeConatiner"
    }
  ]

const App = () => {
  console.log ("added react fragment to body content")
    return (
      <React.Fragment>
        <Layout headerButtons={headerButtonsMap} ></Layout>
      /</React.Fragment> 
      )
};

export default App;