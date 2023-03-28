import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';



class App extends Component {
  render(){
  return (
    <div>
    
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
        <div className="navbar-header">
          <a className="nav-item active navbar-brand" href="/">Pick A Meeting</a>
        </div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/schedule"> Schedule Meeting </Link>
          </li>
         
        </ul>
      </nav>
      
      {/*  Configure the routing below using Switch and Route tag and import the same*/}
      
      
    </div>
  );
  }
}

export default App;
