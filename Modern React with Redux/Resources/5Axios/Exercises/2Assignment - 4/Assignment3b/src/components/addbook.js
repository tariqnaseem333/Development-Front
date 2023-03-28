import React, { Component } from 'react';
import axios from "axios";

// You can create functions of your own.

const url = "http://localhost:4000/books"

class AddBook extends Component {

  state ={
    form : {
        title : "",
        author : "",
        genre : "",
        summary : ""
    },
    formErrorMessage : {
        title : "",
        author : "",
        genre : "",
        summary : "",
    },
    formValidity : {
        title : false,
        author : false,
        genre : false,
        summary : false,
        buttonActive : false
    },
    errorMessage: "",
    successMessage: ""     
  };

    handleChange = event => {
        // code this      
      };
    
    
    
      validateField = (fieldName, value) => {
          // code this                     
    };  

    handleSubmit = (e)=>{
        // POST the form data to the URL
        // Handle the Success and Failure 
        // Populate successMessage and errorMessage accordingly 
    }

render() {
        return (
            <React.Fragment>
            <div className="row">
                <div className="col-md-6 offset-3">
                <form onSubmit={this.handleSubmit} style={{border : "1px solid ",padding :"8px", borderColor : 'gray' }}>
                    <h2 className="text-center">Add A Book</h2>
                    {/*
                    Code the form here
                    */}
                </form>      
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default AddBook;