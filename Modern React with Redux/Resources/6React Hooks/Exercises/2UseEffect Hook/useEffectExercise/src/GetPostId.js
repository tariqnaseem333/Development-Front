import React, { useState, useEffect } from 'react';
// Call the required imports here

function GetPostId() {

    // Create different state variables using required hooks
    // 1)create state variable with name load and setLoad as the function , pass initial value as false
    // 2)create state variable with name id and setId as the function , pass initial value as 1
    // 3)create state variable with name obj and setObj as the function , pass initial value as an empty object
    // 4)create state variable with name idFromButton and setidFromButton as the function , pass initial value as 1
    

    // Call the appropriate hook to fetch the data from the url : URL:'https://jsonplaceholder.typicode.com/posts/${idFromButton}' 
    // Do axios request to the above url 
    // If response comes , set the obj state variable to response, and setLoad as true
    // If error , setLoad as false
    // Use appropriate logic so that useState runs when the button is clicked as given in gif
    

    // Call below function on button call
    const provideData = () => {
        // Fetch the id from appropriate state variable and set it to setidFromButton state function
    }



    return (
        <div className='container-fluid'>
            <br />
            <div className='row'>
                <div className='col-md-5 offset-md-1'>
                    {/* Create a input field , use id state variable and appropriate event handler to setup the state, Do appropriate styling */}
                    {/* Create button here as per gif , call provideData function when user clicks the button */}
                </div>
                <div className='col-md-5 offset-md-1'>
                    {/* Do conditional rendering here */}
                    {/* use load variable for the same , if load is true call ShowCard component passing obj as props, else display loading in h1 tag */}
                </div>
            </div>
        </div>
    )
}

export default GetPostId

