import React, { Component } from "react";
import axios from "axios";

const url = "http://localhost:1050/updatebooking/";

class UpdateBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                bookingId: "",
                noOfTickets: ""
            },
            formErrorMessage: {
                bookingId: "",
                noOfTickets: ""
            },
            formValid: {
                bookingId: true,
                noOfTickets: false,
                buttonActive: false
            },
            successMessage: "",
            errorMessage: "",
            id: this.props.match.params.bookingId
        };
    }


    updateBooking = () => {
        /* 
          Make a axios PUT request to http://localhost:1050/updatebooking/ to update the number of tickets 
          for the selected bookingId and handle the success and error cases appropriately 
        */
    }

    handleSubmit = (event) => {
        /* prevent page reload and invoke updateBooking() method */
    }

    handleChange = (event) => {
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
            <React.Fragment>
                <div className="UpdateBooking">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <br />
                            <div className="card">
                                <div className="card-header bg-custom">
                                    <h4>Update Flight Booking for id: {this.state.id}</h4>
                                </div>
                                <div className="card-body">
                                    {/* code appropriately to render the form as shown in QP */}
                                    {/* display the success and error messages appropriately */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UpdateBooking;