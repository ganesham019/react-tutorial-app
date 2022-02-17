import React, { Component } from "react";

class StateConcept extends Component {
  constructor() {
    super();
    this.state = { message: "I Love My  Visitor...!" };
  }
  
  changeMessage() {
    this.setState({
      message: "Thankyou For subscribing to Me....!",
    });
  }

  render() {
    
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Change Message</button>
      </div>
    );
  }
}

export default StateConcept;
