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

  console.log ("Moved the body content to app and modified to not have any scroll functions");
  
const App = () => {
  
    return (
      <React.Fragment>
        <Layout headerButtons={headerButtonsMap} >
        </Layout>
        
      /</React.Fragment> 
      )
};

export default App;