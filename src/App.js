import React from 'react';
// import HomePage from "./Components/HomePage";
// import FeedBack from "./Components/FeedBack";
// import ContactMe from "./Components/ContactMe";
// import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
    return (
            <React.Fragment>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">KiranAddagarla</a>
                  <div class="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
            </React.Fragment>
    );
};

export default App;