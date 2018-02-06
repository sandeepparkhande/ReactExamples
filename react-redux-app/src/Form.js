import React, { Component } from 'react';

class Form extends Component {

  handleEvent(event) {
    console.log(" Input Text value " + event.target.value);
    this.props.changeUserName(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <b> Name Component Button Click and Input Change Event </b> :  <br /><br />
        
        Enter Name For Display Tab : <input type="text" onChange={this.handleEvent.bind(this)} /> <br /> <br />
        <button onClick={() => this.props.changeUserName("India")}> Click To Change Name India </button> <br /><br />
        
      </div>
    );
  }
}

export default Form;
