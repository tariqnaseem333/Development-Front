import React, { useState, useEffect } from 'react';
// import appropriate modules required 


export default function DisplayEmployee() {

    // Create state variables and function here as per below details
    // 1)create load as state variable, setLoad as a state function , set initial value as false
    // 2)create data as state variable, setData as a state function , set initial value as []
    // 3)create error as state variable, setError as a state function , set initial value as '', empty string
    // 4)create edit as state variable, setEdit as a state function , set initial value as false
    // 5)create selectedData as state variable, setSelectedData as a state function , set initial value as {}, empty object


    // Call the appropriate hooks here 
    // Do axios call to the url to the backend json server:http://localhost:3001/data/, Get request
    // Data has to be fetched only once when page is initially rendered 
    // If succesfull response comes => set load state variable to true , set data state variable as equal to the data coming 
    // If error comes => set error state variable , set load state variable to true



    // Call this function on the click of button 
    // emp obj should be passed as a parameter to it
    // set the selectedData state variable equal to emp variable passed as a parameter
    // set the edit state variable equal to opposite of its previous value
    // set the load state variable equal to false
    const callComponent = (emp) => { }


    // Create the card here 
    // Use appropriate logic to print the employee id on screen , If the employee id is coming 1 from backend , it should be displayed as 1006101 , append 100610 to the id coming from backend
    // Use emp variable to print the details
    // Function is called below
    // callComponent function should be called on click of button , pass appropriate params
    const createCard = (emp, index) => {
        return (
            <div key={index} className='col-md-3 offset-md-1'>
                <div className="card">
                </div>
            </div>
        );
    }


    // Use conditional rendering to display the different details
    // 1)If load state variable value is true , Return
    //     -  Style the text Employee Details accordingly
    //     -  Do conditional rendering to display card and error message
    // 2)If edit is true , Return
    //     - call EditEmployee Component passing selectedData as props
    // 3)Else , Return
    // - render loading in h1 tag using class display-4

    if (load) {
        return (<div className='container-fluid'>
            <h1 className=''>Employee Details</h1>
            <hr />
            <div className='row'>
                {/* Do conditional rendering to display card 
                    - If error is true display error message, if false call the createCard function accordingly  */}
            </div>
        </div>)
    }
    else if (edit) {
        // Call EditEmployee component accordingly 
    }
    else {
        return (<h1>
            Loading...
        </h1>)
    }
}
