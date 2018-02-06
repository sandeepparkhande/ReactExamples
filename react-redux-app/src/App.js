import React, { Component } from 'react';
import Form from './Form';
import Display from './Display';
import FormAdd from './FormAdd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div class="container-fluid">
          <div class="container-fluid">
            <Link to='/'> Home </Link>  &nbsp;&nbsp;
            <Link to='/Display'> Display </Link>&nbsp;&nbsp;
            <Link to='/Form'> Form </Link>&nbsp;&nbsp;
            <Link to='/FormAdd'> FormAdd </Link>&nbsp;&nbsp;
            </div>
          
          <Switch>
            <Route exact path="/" component={Display} />
            <Route exact path="/Display" render={() => <Display changeName={this.props.user.name} sum={this.props.math.result} payload={this.props.math.payload} />} />
            <Route exact path="/Form" render={() => <Form changeUserName={this.props.setName.bind(this)} addNum={this.props.addNumber.bind(this)} />} />
            <Route exact path="/FormAdd" render={() => <FormAdd addNum={this.props.addNumber.bind(this)} />} />
          </Switch>
            </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}

/*const mapDispatchToProps =(dispatch) =>{
  return {
    setName : (name) => {
      dispatch({
        type : "SET_NAME",
        payload : name
      });
    }
  }
}*/

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ setName, addNumber }, dispatch)
  }
}
const setName = (name) => {
  return {
    type: "SET_NAME",
    payload: name
  };
}

const addNumber = (number) => {
  console.log(" Number " + number);
  return {
    type: "ADD",
    payload: number
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);


