import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import"./index.css";

const course1 = {
  title : "HTML5",
  author : "Dan Brown",
  category : "Web Development",
}

const course2 = {
  title : "CSS",
  author : "Robin Cook",
  category : "Web Development",
}
const course3 = {
  title : "JavaScript",
  author : "Dan Brown",
  category : "Programming",
}


function createCard(course, index) {
  // Code for creating a card.
}

function generateTable() {
  /* Use the data provided to create a table
  */
}

function getCourseDetails(){

  const courseArr = [course1, course2, course3];
  const element = (
    <div>
      <h3 className="text-primary offset-3">Featured Courses</h3>
      <div className="row">
        {/*
        Code Here
        Use the courseArr to populate the cards.
        */}
      </div>
    </div>
  )
  return element;
}


ReactDOM.render(getCourseDetails(), document.getElementById('root'));