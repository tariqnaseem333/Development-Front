import React, { Component } from 'react';

//import Book Component here

class App extends Component {
  constructor() {
    super();
    
    const book1 = {
      "author": "Frank Herbert",
      "title": "Dune",
      "summary": "The story of a boy and a great family’s ambitious attempt to realize mankind’s most ancient and unattainable dream."
      }
   
    const book2 = {
      "author": "Mur Lafferty",
      "title": "Six Wakes",
      "summary": "A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be the killer."
      }
   
  const book3 = {
      "author": "Yann Martel",
      "title": "Life of Pi",
      "summary": " An inspirational tale of survival, endurance, resilience and faith"
      }
    
      this.bookArr = [book1, book2, book3]
  }
  render() {
    return (
    <React.Fragment>
      <h4 className="text-success">Bestsellers 2018</h4>
      <div className= "row" style={{ 'marginTop': 30 }}>
       {/*
          Use book array And Book component to display data.  
        */}
      </div>
    </React.Fragment>
    );
  }
}

export default App;