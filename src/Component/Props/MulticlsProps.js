import React, { Component } from 'react';

export default class ChildProperty extends Component {
  
  render() {
    console.log(this.props);
    return <div>
        <h1><b>Hi ChildrenProperty {this.props.name} and the {this.props.directorname}</b></h1>
    </div>;
  }
}
