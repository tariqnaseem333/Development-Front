import React, { Component } from 'react';

// Complete this class
class AddBook extends Component {

  state = {
    form: {
        title: "",
        author: "",
        genre: ""
    },
    formErrorMessage: {
        title: "",
        author: "",
        genre: ""
    },
    formValidity: {
        title: false,
        author: false,
        genre: false,
        buttonActive: false
      },
    }

    handleChange = event => {
        // implement this
    };

    validateField = (fieldName, value) => {
      // implement this
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-5 offset-4">
                        
                        <form style={{ border: "1px solid ", padding: "15px", borderRadius: "8px", borderColor: 'gray' }}>
                            <h2 className="text-center">Add A Book</h2>
                            {/*
                              Implement the form here
                            */}
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AddBook;