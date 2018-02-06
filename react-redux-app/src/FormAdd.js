import React, { Component } from 'react';
import validator from 'validator';

const required = (value) => {
  console.log("I am here");
  if (!value.toString().trim().length) {
    
    return 'require';
  }
};
 

class FormAdd extends Component {

  constructor(props){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      // form is invalid! so we do nothing
      return;
    }
    const data = new FormData(event.target);
   
    console.log(" numbers submitted "+data);
    var num1=parseInt(data.get('number1'));
    var num2= parseInt(data.get('number2'));
    var sum=num1+num2;
   
    
    this.props.addNum(sum);
    
    /*fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });*/

     }

  render() {
    return (
      <div className="App">
        <b> Form Add Component : This will explain Form Submission </b> :  <br /><br />
        <form  className="demoForm" onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="number1">Enter Number 1 :</label>  <input type="text" name="number1" pattern="\d+" validations={[required]}/> <br/><br/>
        <label htmlFor="number2">Enter Number 2 :</label>  <input type="text" name="number2" pattern="\d+"  validations={[required]}/>  <br/><br/>
        <input type="submit" value=" Submit Sum of Numbers and Add to Result" />
        <button onClick={() => this.props.addNum(10)}>Click To Add Number 10</button>

       </form>
      </div>
    );
  }
}

export default FormAdd;
