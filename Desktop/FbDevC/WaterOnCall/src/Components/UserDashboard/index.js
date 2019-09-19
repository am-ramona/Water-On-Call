import React, { Component } from 'react'
import DonutChart from "react-svg-donut-chart"
import GaugeChart from "react-gauge-chart"
import fire from '../../Config/Fire'
import * as $ from 'jquery'
import './styles.css'

export default class UserDashboard extends Component {

 constructor() {
    super();
    this.state = {
      token: null,
      waterData: 0,
      waterFlow: 0
    }
    this.logout = this.logout.bind(this)
  }

componentDidMount(){
    $.ajax({
      url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/SONIC",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njc4NzU5NDQsImlhdCI6MTU2Nzg2ODc0NCwidXNyIjoiaHVzYW1naCJ9.xDdHx--u0mSIBb1NeZiHEwfJNL0_TaH0vloOwrfYSng");
      },
      success: (data) => {
        // console.log("success")
        // console.log(data)
        this.setState({ waterData: data.out })
      }
    });

    $.ajax({
      url: "https://api.thinger.io/v2/users/husamgh/devices/ard1/Flow meter",
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1Njc4NzU5NDQsImlhdCI6MTU2Nzg2ODc0NCwidXNyIjoiaHVzYW1naCJ9.xDdHx--u0mSIBb1NeZiHEwfJNL0_TaH0vloOwrfYSng");
      },
      success: (data) => {
        // console.log("success")
        // console.log(data)
        this.setState({ waterFlow: data})
      },
      failure: (data) => {
        // console.log(data)
      }
    });
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/UserDashboard')
  };

logout(){
    fire.auth().signOut()
    this.props.history.push('/SignIn')
  }

render(){
  const dataPie = [
    {value: 100, stroke: "#4ac46f"},
    {value: this.state.waterData, stroke: "#00ff21"},
    {value: 60, stroke: "transparent"}
  ]

  return (
    <div className='userDashboard'>
        <p className='title'>Level of the Water in the Tank.</p>
        <DonutChart className="WaterChart" data={dataPie} />
        <p className='title'>Incoming Water Speed</p>
        <GaugeChart id="gauge-chart" colors={["#FF5F6D", "#FFC371"]} percent={0.00} />
        <p className='title'>Online Vendors</p>
        <div class="flex-container">
          <div>Vendor 1</div>
          <div><a href="tel:03 123456">03 123456</a></div>
          <div>beirut</div>
          <div>Vendor 2</div>
          <div><a href="tel:70 123456">70 123456</a></div>
          <div>North</div>
          <div>Vendor 3</div>
          <div><a href="tel:71 123456">71 123456</a></div>
          <div>Mount Lebanon</div>
        </div>
        <button className='logout' onClick={this.logout}>Logout</button>
    </div>
  );
}
}
