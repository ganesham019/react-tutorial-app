import React, { Component } from "react";

class ConditionRend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:true,
    };
  }

  render() {
   //   First Method If else condition method

    let message;
    if (this.state.isLoggedIn) {
     return message = <div>Welcome User </div>;
    } else {
     return message = <div>Welcome Guest </div>;
    }
    // return <div>{message}</div>;


    // Second Method Conditional Operator
 
   //return this.state.isLoggedIn ?   (<div>Welcome Guest </div>)  :    (<div>Welcome Login Person </div>)
   
  }
}
export default ConditionRend;
