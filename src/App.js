import React from 'react';
import Layout from './Components/Layout';




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

  console.log ("Removed all the comments in files and moved body to layout");
  
const App = () => {
  
    return (
      <React.Fragment>
        <Layout headerButtons={headerButtonsMap} ></Layout>
      /</React.Fragment> 
      )
};

export default App;