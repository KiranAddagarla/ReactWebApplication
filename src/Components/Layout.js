import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";


const Layout = (props) => {

    const headerButtonMap = props.headerButtons;

    const headerButtons =  headerButtonMap.map((headerButton) => {
        return(
            <li class="nav-item">
                <Link
                    activeClass="active"
                    to={headerButton.sectionId}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>{headerButton.buttonName}
                </Link>              
            </li>
        )
    });

  return (
    <div>
      <nav id="layout-navbar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#HomeContainer">
            KiranAddagarla
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="justify-content-end collapse navbar-collapse"
            id="navbarSupportedContent" >
                <ul class="nav nav-pills">
                    {headerButtons}
                </ul>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Layout;
