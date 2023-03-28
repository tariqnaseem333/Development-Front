import React, { Component } from "react";


class App extends Component {
  state = { value: 1 };

  onAddition = () => {
    console.log(this.state);
    this.setState((prevState)=>{
      prevState.value = prevState.value * 2
      return prevState;
    });
  }

  render() {
    const {value} = this.state;
    return (
      <div>
        <br/>
        <h4>Testing Exercise</h4>
        <button type="button" className="btn btn-primary" onClick={this.onAddition}>
          Do Addition
        </button>
        <br/>
        <span>{value}</span>
      </div>
    );
  }
}

export default App;