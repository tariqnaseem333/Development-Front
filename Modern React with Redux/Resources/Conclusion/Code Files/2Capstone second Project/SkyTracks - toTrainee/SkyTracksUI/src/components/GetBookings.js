import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import BookingDetailsCard from './BookingDetailsCard';


const url = "http://localhost:1050/viewBookingDetails/";

class GetBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: null,
      bookingId: "",
      errorMessage: "",
    };
  }

  fetchBooking = () => {
    // Make an axios get request to get the booking details for the specified bookingId
    // populate the bookingData or errorMessage appropriately
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    this.fetchBooking();
  }
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({ bookingId:value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="card bg-card custom-card text-light">
                <div className="card-body">
                  <h4>View Booking Details</h4>
                  <form onSubmit={this.fetchBooking}>

                    {/* Create the form here */}
                    
                  </form>
                  <p className="text-danger">{this.state.errorMessage}</p>
                  {
                    this.state.bookingData!=null?(
                      <div className="mt-3">

                        {/* Display the booking details here by rendering the BookingDetailsCard component and passing bookingData as props*/}

                      </div>
                    ):null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GetBooking;
