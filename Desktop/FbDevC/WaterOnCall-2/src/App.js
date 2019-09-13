import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserDashboard from './Components/UserDashboard'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Home from './home'
import Fire from './Config/Fire'
import './App.css'

// function App() {

class App extends Component {
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
  return (
    <div className='App'>
      {Object.entries(this.state.user).length === 0 ? (<SignIn />) : (<Home />) }
    </div>
  );
 }
}

export default App;