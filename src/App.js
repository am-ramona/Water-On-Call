import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserDashboard from './Components/UserDashboard'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/userDashboard" component={UserDashboard} />
      </Switch>
    </Router>
  );
}

export default App;