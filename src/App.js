import React from 'react';
import HomePage from "./Components/HomePage";
import FeedBack from "./Components/FeedBack";
import ContactMe from "./Components/ContactMe";
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={HomePage} />
            <Route path="/feedback" exact component={FeedBack} />
            <Route path="/contactme" exact component={ContactMe} />
        </BrowserRouter>
    );
};

export default App;