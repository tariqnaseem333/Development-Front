import React from 'react';
import ReactDOM from 'react-dom';

import "bootstrap/dist/css/bootstrap.css";
import"./index.css";

// Book data
const book1 ={
    title : "Angels and Demons",
    publisher : "Penguin Random House",
    author : "Dan Brown",
    price : 409,
    prodId : 2012,
}

// Book data
const book2 ={
    title : "Norse Mythology",
    publisher : "Bloomsbury Publishing",
    author : "Neil Gaiman",
    price : 300,
    prodId : 2019,
}

function createCard(book) {
  // Implement a Single Card creation
}

function getBookDetails(){
  const bookArr = [book1, book2];
  // Use bookArr, and CreateCard function here to display cards 
  // based on required logic
  
  return (
    <div>
    </div>
  );
}

ReactDOM.render(getBookDetails(), document.getElementById('root'));