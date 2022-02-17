import React, { Component } from 'react';

export class EVenHandling extends Component {
    handleClick(){
        console.log("Button Clicked");
    }
  render() {
    return <div>
        <button onClick={this.handleClick}> CLick Me </button>
        {/* its showed a Message on Console , That is Event Handling. */}
    </div>;
  }
}

export default EVenHandling;
