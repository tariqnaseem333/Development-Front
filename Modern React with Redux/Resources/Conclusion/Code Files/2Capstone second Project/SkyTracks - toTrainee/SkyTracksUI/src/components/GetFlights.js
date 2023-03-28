import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import FlightDetails from './flightDetails';


const url = "http://localhost:1050/getFlights/";

export default class GetFlights extends Component {
    constructor(props){
        super(props);
        this.state = {
            availableFlights:null,
            form:{
                origin: "",
                destination: "",
                departureDate: "",
                noOfTickets: 0
            },
            formErrorMessage:{
                originError: "",
                destinationError: "",
                departureDateError: "",
                noOfTicketsError: ""
            },
            formValid:{
                originfield: false,
                destinationfield: false,
                departureDatefield: false,
                noOfTicketsfield: false,
                buttonActive:true,
            },
            errorMessage:"",
            
        }
    }
    submitBooking = () => {
        // Make an axios get request to get the flights in the specified route
        // populate the availableFlights or errorMessage appropriately
    };
    handleSubmit = event => {
        // Prevent the default behaviour of form submission
        // Call appropriate method to make the axios get request
    };
    handleChange = event => {
        // Get the names and values of the input fields
        // Update the formValue object in state
        // Call the validateField method by passing the name and value of the input field
    };
    validateField = (fieldName, value) => {
        // Validate the values entered in the input fields
        // Update the formErrorMessage and formValid objects in the state
    };
    render(){
        if(this.state.availableFlights!=null){
            // Pass appropriate props to the FlightDetails component below
            return <FlightDetails></FlightDetails>
        } else{
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-4 offset-lg-1">
                                <div className="card bg-card text-light ">
                                    <div className="card-body">
                                        {/* Create the form here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

}