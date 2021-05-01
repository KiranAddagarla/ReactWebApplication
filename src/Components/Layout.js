import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Layout = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const headerButtonMap = props.headerButtons;

  const headerButtons = headerButtonMap.map((headerButton) => {
    return (
      <li className="nav-item p-2">
        <Link
          activeClass="active"
          to={headerButton.sectionId}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {headerButton.buttonName}
        </Link>
      </li>
    );
  });

  return (
    <nav
      id="layout-navbar"
      className="navbar navbar-expand-lg navbar-fixed-top bg-transparent"
    >
      <div className="container-fluid">
        <div>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#HomeContainer" onClick={scrollToTop}>
            KiranAddagarla
            </a>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className=" nav navbar-nav">{headerButtons}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
