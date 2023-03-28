import React, { Component } from 'react';

//import Mobile Component here

class App extends Component {
  constructor() {
    super();
    const mob1 = {
      "model": "Google Pixel 2 XL ",
      "price": "62,000",
      "ram": "4 GB",
      "camera": "12.2 MP",
      "os": "Android Pie",
      "processor": "Snapdragon 835 octa-core"
    }
    const mob2 = {
      "model": "Apple Iphone x",
      "price": "98,000",
      "ram": "3 GB",
      "camera": "12 MP",
      "os": "iOS 11.1.1",
      "processor": "A11 Bionic hexa-core"
    }
    this.mobArr = [mob1, mob2]
  }
  render() {
    return (
      <div className="row" style={{'marginTop' : 30}}>
        {/*
          Use mobile array And Mobile component to display data.  
        */}

      </div>
    );
  }
}

export default App;