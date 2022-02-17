import React, { Component } from "react";

class StateCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  IncCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  DecCount() {
    this.setState({
      count:  this.state.count - 1 ,
    });
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count} </h1>
        <button onClick={() => this.IncCount()}>Add Count</button>
        <button onClick={() => this.DecCount()}>Dec Count</button>
      </div>
    );
  }
}

export default StateCounter;
