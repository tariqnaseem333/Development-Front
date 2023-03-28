import React, { Component } from "react";

const url = "http://localhost:8765/flight/bookflight/";


class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        customerId: "",
        flightName: this.props.match.params.flightName,
        flightId: "",
        noOfTickets: ""
      },
      formErrorMessage: {
        customerId: "",
        flightId: "",
        noOfTickets: ""
      },
      formValid: {
        customerId: false,
        flightId: false,
        noOfTickets: false,
        buttonActive: false
      },
      flightIds: ["F-101", "F-102", "F-103", "F-104"],
      errorMessage: "",
      successMessage: ""
    };
  }

  submitBooking = () => {
     /* Make an axios post request  by using above url provided as constant url by passing form data as request body and handle success and error cases 
        */
  }

  /* To Be Implemented */
  handleSubmit = event => {
   // Prevent page refresh on form submission and invoke submitBooking method
  };


/* To Be Implemented */
  handleChange = event => {
     /*
          invoke whenever any change happens in any of the input fields
          and update form state with the value. Also invoke validateField() method to validate the entered value
        */
  };
/* To Be Implemented */
  validateField = (fieldName, value) => {
    /* 
        * Perform Validations and assign error messages.Also 
        * set the value of buttonActive after validation of the fields 
        */
  };
/* To Be Implemented */
  render() {
    return (

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <br />
          <div className="card">
            <div className="card-header bg-custom">
              <h3>Flight Booking Form</h3>
            </div>
            <div className="card-body">
              1.Create the form as per the view given in screenshots 
              2.All the form fields should be bound to the corresponding state property
              3. All the form fields should have proper name same as state properties
              4.flightName field should be disabled by default 
              5.Display success or error messages as given in QP 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBooking;
