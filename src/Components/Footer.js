import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bg from '../../src/Assest/image/new-logo.png';

export default class footer extends Component {
  render() {
    return (
      <div className="container sifooter">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
               <h4>Signup for Newsletter</h4>
               <p>we'll never share your email address with a thid</p>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 buta">
          <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Email ..."
              className=" mr-sm-2 news yesas"
            />
          </Col>
          <Col xs="auto" className='but'>
            <Button type="submit">Signup</Button>
          </Col>
        </Row>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 ex-na">
          <div className='navs-1 '>
<a><i class="fa-brands fa-facebook" style={{color:"#000"}}></i></a>
        <a><i class="fa-brands fa-twitter" style={{color:"#000"}}></i></a>
        <a><i class="fa-brands fa-instagram" style={{color:"#000"}}></i></a>
        <a><i class="fa-brands fa-linkedin" style={{color:"#000"}}></i></a>
</div>
          </div>
        </div>
        <hr></hr>
        <div className="row">
               <div className="col-lg-3 col-md-3 col-6">
               <img src={Bg} className='logo'></img>
                 <p className="consus">ContactUs Friendly support 24/7</p>
                 <p>Address :123 Main Street, Sample City,Sample State. Pin:12345<br/>
                 Email:demo@gmail.com
                 </p>
               
               </div>
               <div className="col-lg-3 col-md-3 col-6">
                   <h5>INFORMATION</h5>
                   <p>Job Description</p>
                   <p>Investor</p>
                   <p>Events</p>
                   <p>Contact Us</p>
               </div>
               <div className="col-lg-3 col-md-3 col-6">
               <h5>ABOUT US</h5>
                   <p>Job Description</p>
                   <p>Investor</p>
                   <p>Events</p>
                   <p>Contact Us</p>
               </div>
               <div className="col-lg-3 col-md-3 col-6">
               <h5>LET'S US HELP YOU</h5>
                   <p>Job Description</p>
                   <p>Investor</p>
                   <p>Events</p>
                   <p>Contact Us</p>
               </div>
             
        </div>
        <hr></hr>
        <div className="la-footer">
            <h6>@2023 Grocery Store Develop by jana. All rights received</h6>
            <div className="payment">
                <h6>Payment Method: <span>VISA | PAYPAL</span></h6>
            </div>
        </div>
      </div>
    );
  }
}
