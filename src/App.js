import React from 'react';
// import HomePage from "./Components/HomePage";
// import FeedBack from "./Components/FeedBack";
// import ContactMe from "./Components/ContactMe";
// import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
            <React.Fragment>
              <nav className="navbar nabvar-default">
                <div className="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">KiranAddagarla</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                      <li class="active"><a href="#">Home</a></li>
                      <li><a href="#">Page 1</a></li>
                      <li><a href="#">Page 2</a></li>
                      <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
              </nav>
            </React.Fragment>

        // <BrowserRouter>
        //     <Route path="/" exact component={HomePage} />
        //     <Route path="/feedback" exact component={FeedBack} />
        //     <Route path="/contactme" exact component={ContactMe} />
        // </BrowserRouter>
    );
};

export default App;