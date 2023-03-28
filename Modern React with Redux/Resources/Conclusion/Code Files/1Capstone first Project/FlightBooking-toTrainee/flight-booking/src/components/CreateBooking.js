import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:1050/bookFlight/";
const url1 = "http://localhost:1050/getFlightIds/";

class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        customerId: "",
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
      flightIds: [],
      errorMessage: "",
      successMessage: ""
    };
  }

  submitBooking = () => {
    /* 
      Make a POST request to http://localhost:1050/bookFlight/ with form data 
      and handle success and error cases 
    */
  }

  fetchFlightIds = () => {
    /* 
      Make a axios GET request to http://localhost:1050/getFlightIds/ to fetch the flightId's array 
      from the server and handle the success and error cases appropriately 
    */
  }

  handleSubmit = event => {
    /* prevent page reload and invoke submitBooking() method */
  }

  handleChange = event => {
    /* 
      invoke whenever any change happens any of the input fields
      and update form state with the value. Also, Inoke validateField() method to validate the entered value
    */
  }

  validateField = (fieldName, value) => {
    /* Perform Validations and assign error messages, Also, set the value of buttonActive after validation of the field */
  }

  render() {
    return (
      <div className="CreateBooking ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h3>Flight Booking Form</h3>
              </div>
              <div className="card-body">
                {/* create form as per the view given in screenshots */}
                {/* Display success or error messages as given in QP */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBooking;
