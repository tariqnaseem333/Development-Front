// Necessary imports
import React, { useState } from "react";
import caiptain from '../assets/caiptain.jfif';
import ironman from '../assets/ironman.jfif';
import './useStateExercise.css';

// Data set to be displayed
const user1 = {
    avengerName: "Capt. America",
    origin: "USA",
    Famour_For: "World war 2 hero",
    image: caiptain,
    RealName: "Steve Rogers"
};
const user2 = {
    avengerName: "Iron Man",
    origin: "USA",
    Famour_For: "Industrialist",
    image: ironman,
    RealName: "Robert Downey Jr."
};

function ShowDetails() {

    // Use below array for refernce
    var userArray = [user1, user2];
  
    // Use suitable hook and pass null as its initial value
    // Pass selectedAvenger as the state variable and changeState as the method which will update the variable
    // Create the state here
  

    // Use below card to create card method , user as a object ispassed an array
    var createCard = user => {
    //   Use appropriate logic to create the card , For reference please refer gif
    };
  
    return (
      <div>
          {/* Use necessary styling to style the <h3> tag */}
        <h3>Avengers Hero</h3><br/><br/>
        <div className='container-fluid'>
          <div className="row">
              {/* Use suitable javascript functions to display the card, Use create card function for the same */}
            {/* Write logic here */}
          </div>
        </div>
      </div>
    );
  }
  export default ShowDetails;