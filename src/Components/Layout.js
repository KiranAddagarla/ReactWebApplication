import React from "react";

const Layout = (children) => {
    return (
        <React.Fragment>
             <nav className="navbar nabvar-default">
                <div className="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">KiranAddagarla</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item p-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/feedback">Feedback</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/contactme">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">{children}</div>
        </React.Fragment>
    )
}