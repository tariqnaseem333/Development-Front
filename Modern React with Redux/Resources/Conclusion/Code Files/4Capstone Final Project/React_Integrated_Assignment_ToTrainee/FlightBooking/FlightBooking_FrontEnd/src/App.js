import React, { Component } from "react";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateBooking from "./components/CreateBooking";
import ViewFlights from "./components/ViewFlights";



class AppComp extends Component {
  render() {
    return (
      <Router>
        <div>

          <nav className="navbar navbar-expand-lg navbar-light  bg-custom">
            <span className="navbar-brand">Infy Airlines</span>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/bookflight">
                  Book Flight
                </Link>
              </li>
             

            </ul>
          </nav>
          <Switch>
            {/* 
            Add the routes as mentioned below:
              1. It should redirect to /viewflights page for default URL i.e. http://localhost:3000/
              2. It should load CreateBooking component for /bookflight/:flightName
              3. It should load ViewFlights component for /viewflights
              4. It should redirect to /viewflights page for any invalid URL e.g. http://localhost:3000/aboutus
          */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppComp;