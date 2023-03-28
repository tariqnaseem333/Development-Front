import React, { Component } from 'react';
import './ScheduleMeeting.css';


//USE BELOW CONSTANT TO MAKE AXIOS REQUEST
const scheduleMeetingURL = "http://localhost:8765/meeting/schedule/"


class ScheduleMeeting extends Component{

    constructor() {
        super();
        this.state = {
            formValue: {
                schedulerName: "",
                meetingType: "",
                dl: "",
                purpose: "",
                dateOfMeeting:"",
                distributionList:["ETA_MYS_JAVA","ETA_MYS_MS","ETA_MYS_BI","ETA_MYS_UI","ETA_MYS_AI"]
            },
            formErrorMessage: {
                schedulerName: "",
                meetingType: "",
                dl: "",
                purpose: "",
                dateOfMeeting:""
            },
            formValid: {
                schedulerName: false,
                meetingType: false,
                dl: false,
                purpose: false,
                dateOfMeeting: false,
                buttonActive:false
               
            },
            successMessage: "",
            errorMessage: ""
        }
    }

    handleChange = (event) => {
        /* 
            invoke whenever any change happens in any of the input fields
            and update form state with the value. Also, invoke validateField() method to validate the entered value
        */
    }

    validateField = (fieldName, value) => {
        /* 
        * Perform Validations and assign error messages, Also, 
        * sets the value of buttonActive after validation of the fields
        */
    }
    handleSubmit=(event)=>{
        // Prevent page refresh on form submission and invoke scheduleMeeting method
    }
    scheduleMeeting = () => {
         /* 
            
            Make an axios Post request by using above url provided as constant scheduleMeetingURL by passing form data 
            as request body and handle success and error cases 
        */
    }

    render() {
        return (
            
                <div className="row">
                    <div className="col-md-4 offset-4">
                    <br/>
                    <br/>
                           <div className="card bg-warning">
                            <div className="card-header">
                                <h4>Schedule Meeting Form</h4>
                            </div>
                            <div className="card-body">
                                
                                {/* create Schedule Meeting form as per the view given in screenshots */}
                                {/* Display success or error messages as given in QP */}
                           
                   
                           
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
export default ScheduleMeeting