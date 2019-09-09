import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default class SignIn extends Component {

 constructor() {
    super();
    this.state = {
      token: null,
      waterData: 0
    }
    // this.loginWithSpotify = this.loginWithSpotify.bind(this)
  }

  // componentDidMount() {
  //   let _token = hash.access_token;
  //   if (_token) {
  //     this.setState({
  //       token: _token
  //     })
  //     this.loginWithSpotify(_token)
  //   }
  // }

// componentDidMount(){
//     $.ajax({
//       url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/SONIC",
//       type: "GET",
//       beforeSend: (xhr) => {
//         xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NjcyNTc0NDYsImlhdCI6MTU2NzI1MDI0NiwidXNyIjoiaHVzYW1naCJ9.GskpBsGzGDgJN3wZD9YSH7O7UuFtLHNAmFirVHSNOtU");
//       },
//       success: (data) => {
//         console.log("success")
//         console.log(data)
//         this.setState({ waterData: data.out })
//       }
//      });
// }

handleSubmit = (event) => {
    // if (value) {
    //   setList(list.concat(value));
    // }
    // setValue('');
    event.preventDefault();
    this.props.history.push('/UserDashboard')
  };

render(){
  // const dataPie = [
  //   {value: 100, stroke: "#4ac46f"},
  //   {value: this.state.waterData, stroke: "#00ff21"},
  //   {value: 30, stroke: "#3da18d"},
  //   {value: 20, stroke: "#69c2b0"},
  //   {value: 10, stroke: "#a1d9ce"},
  // ]

  return (
        <div className='modal' style={{ position: 'fixed', 
                                        top: '0px', 
                                        bottom: '0px', 
                                        left: '0px', 
                                        width: '100vw', 
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                        padding: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'}}>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <p className="title">Sign In To Your Account</p>
              <div className="SignInModal textInputContainer">
                  <input id="emailId" 
                         maxLength="50" 
                         autoComplete="off" 
                         className="textInputContainer" 
                         name="Email" 
                         placeholder="Email" />
                  <input id="passwordId" 
                         maxLength="20" 
                         autoComplete="off" 
                         type="password" 
                         className="textInputContainer" 
                         name="Password" 
                         placeholder="Password" />
              </div>
            <button type="submit" id="login" className="signInUp">Sign In</button>
            <p className="signInUpModal smallText">New? 
               <Link to='/SignUp' className='signInUpLink'>Signup </Link>
            </p>
          </div>
      </form>
      </div>
  );
}
}
