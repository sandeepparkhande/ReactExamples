import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="App">
        <b> Dislay Component</b> <br /><br />
         Name is : {this.props.changeName} <br />  
         Number Added : {this.props.payload} <br /> 
         Sum : {this.props.sum}
      </div>
    );
  }
}

export default Display;
