import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const url = "http://localhost:8765/flight/viewflights/";


class ViewFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightsArray: [],
      flightId: "",
      redirectStatus: false,
      selectedFlightName: "",
      errorMessage: "",
      successMessage: ""
    };
  }

  componentDidMount() {
    this.fetchFlights();
  }

  fetchFlights = () => {
    /* Make an axios Get request  by using above url provided as constant url and handle success and error cases 
        */
  }

  render() {  
    if (this.state.redirectStatus) {
      return <Redirect to={`/bookflight/${this.state.selectedFlightName}`} />
    }
    return (
      <div className="container-fluid mt-5">
         {/* if flightsArray has flight Objects - invoke the displayFlights method else render the errorMessage as shown in QP */}
                    
      </div>
    )
  }

  handleClick = (flight) => {
    this.setState({ redirectStatus: true, selectedFlightName: flight.flightName })
  }

  displayFlights = () => {
    return this.state.flightsArray.map((flight, index) => {
      return (
        <div className="col-md-3" key={index}>
          <div className="card shadow">
            <img style={{ height: '200px' }} src={flight.flightImagePath} alt={flight.flightId} className="card-img-top" />
            <div className="card-body gradient-buttons text-center">
              <h4 className="text" name="flightName">
                {flight.flightName}
              </h4>
              <h5 name="fare" className="text-success">
                Fare: Rs. {flight.fare}
              </h5>
              <button name="bookflight" className="btn btn-primary" onClick={() => { this.handleClick(flight) }}>
                Book Flight  </button>
            </div>
          </div>
        </div>
      )
    })
  }

}

export default ViewFlights;
