import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserDashboard from '../UserDashboard'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import Home from '../../home'
import Fire from '../../Config/Fire'
import './styles.css'

// function App() {

class Homepage extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		user: {},
      // user: null
  	}
  }

  componentDidMount(){
  	 this.authListener();
  }

  authListener() {
  	Fire.auth().onAuthStateChanged((user) => {
  		console.log(user);
  		if (user) {
  			this.setState({ user });
  			// localStorage.setItem('user', user.uid);
  		} else {
  			this.setState({ user: {} });
  			// localStorage.removeItem('user');
  		}
  	})
  }

render(){ console.log("user:", this.state.user)
  console.log('Object.entries(this.state.user).length', Object.entries(this.state.user).length)
  return (
    <div className='App'>
      {Object.entries(this.state.user).length === 0 ? (<SignIn />) : (<Home />) }
    </div>
  );
 }
}

export default Homepage;