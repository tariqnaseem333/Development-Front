import React, { Component } from "react";
import axios from "axios";
import Redirect from "../../node_modules/react-router-dom/Redirect";

const url = "http://localhost:1050/getAllBookings/";
const url1 = "http://localhost:1050/deleteBooking/";

class GetBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: "",
      bookingId: "",
      updateStatus: false,
      errorMessage: "",
      successMessage: ""
    };
  }


  updateBooking = (bid) => {
    /* update the updateStatus and bookingId state with appropriate values */
  }

  fetchBooking = () => {
    /* 
      Send an AXIOS GET request to the url http://localhost:1050/getAllBookings/ to fetch all the bookings 
      and handle the success and error cases appropriately 
    */
  }

  deleteBooking = (id) => {
    /*
      Send an AXIOS DELETE request to the url http://localhost:1050/deleteBooking/ to delete the selected booking
      and handle the success and error cases appropriately 
    */
  }

  render() {
    const { bookingData } = this.state;

    return (
      <div className="GetBooking">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h3 align="center">Booking Details</h3>
              </div>
              <div className="card-body">
                {/* code here to get the view as shown in QP for GetBooking component */}
                {/* Display booking data in tabular form */}
                {/* Display error message if the server is not running */}
                {/* code appropriately to redirect on click of update button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetBooking;
