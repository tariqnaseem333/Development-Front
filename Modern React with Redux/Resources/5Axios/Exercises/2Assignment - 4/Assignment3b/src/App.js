import React from 'react';

import {BrowserRouter as Router, Route, Link, Switch, Redirect  } from 'react-router-dom';

// import the required components

class App extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">Learning Portal</Link>
                </div>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/card">View All Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addBook">Add a Book</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <br/>
               <Switch>
                {/*Implement the routes*/}
              </Switch>

            </React.Fragment>
          </Router>   
        );
    }
}
export default App;