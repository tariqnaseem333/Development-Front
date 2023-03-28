import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import DisplayEmployee from './components/DisplayData';

ReactDOM.render(
  <DisplayEmployee/>
  , document.getElementById('root'));