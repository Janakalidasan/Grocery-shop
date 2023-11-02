import React, { Component } from "react";
import "./Style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import delivaryman from '../../src/Assest/image/delivery -1.png';
import supermarker from '../../src/Assest/image/supermarket-1.png';
import Allfoods from '../../src/Assest/image/Allfoods.png';
export default class Herotwo extends Component {
  render() {
    return (
        <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card newthinks">
                 <div className="row">
                        <div className="col-7 first-org">
                            <p>Organic & Fresh</p>
                            <h4>Get Fresh Grocery<br />Delivered to You!</h4>
                            <p>Discount <span>50%</span></p>
                        </div>
                        <div className="col-5">
                           <img src={delivaryman} className="delivaryman"/>
                        </div>
                 </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card newthinks-1">
                 <div className="row">
                        <div className="col-7 first-org">
                            <h4>Diet Stuff <br />& More!</h4>
                            <p>From<span>$281</span></p>
                            <p>Shop <i class="fa-solid fa-chevron-right" style={{color:"#183153"}}></i></p>
                        </div>
                        <div className="col-5">
                           <img src={supermarker} className="supermarket"/>
                        </div>
                 </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card newthinks-2">
                 <div className="row">
                        <div className="col-7 first-org">
                            <h4>Organic Food <br/> at Doorstep!</h4>
                            <p>Contact Less Home<br />Delivery</p>
                           
                        </div>
                        <div className="col-5">
                           <img src={Allfoods} className="supermarket-1"/>
                        </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
<br></br>
      <div className="container">
          <div className="row">
          <div className="col-lg-1"></div>
                <div className="col-lg-2 col-md-2 col-6">
                   <div className="support">
                   <i class="fa-solid fa-rocket fa-rotate-270" ></i>
                   <h5>Free Delivery</h5>
                   <p>Worldwide from $200</p>
                   </div>
                </div>
                <div className="col-lg-2 col-md-2 col-6">
                <div className="support">
                <i class="fa-solid fa-circle-dollar-to-slot"></i>
                   <h5>Easy Return</h5>
                   <p>30days return</p>
                   </div>
                </div>
                <div className="col-lg-2 col-md-2 col-6">
                <div className="support">
                <i class="fa-solid fa-shield"></i>
                   <h5>Secure Payment</h5>
                   <p>100% Secrue Payment</p>
                   </div>
                </div>
                <div className="col-lg-2 col-md-2 col-6">
                <div className="support">
                <i class="fa-solid fa-headset"></i>
                   <h5>24/7 Support</h5>
                   <p>Dedicated Support</p>
                   </div>
                </div>
                <div className="col-lg-2 col-md-2 col-6">
                <div className="support">
                <i class="fa-solid fa-comment-dots"></i>
                   <h5>99% Customers</h5>
                   <p>Feedbacks</p>
                   </div>
                </div>
                <div className="col-lg-1"></div>
          </div>
      </div>
      </>
    );
  }
}
