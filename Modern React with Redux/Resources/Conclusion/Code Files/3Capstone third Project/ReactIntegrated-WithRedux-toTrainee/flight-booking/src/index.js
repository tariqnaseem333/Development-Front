import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import App from './App';

//Import necessary Redux modules

// Creating a Redux store

//Pass store to the App component using Provider component
ReactDOM.render(<App />, document.getElementById('root'));