import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cardimg1 from "../Assest/image/cardimg1.avif";
import cardimg2 from "../Assest/image/cardimg2.avif";
import cardimg3 from "../Assest/image/cardimg3.avif";
export default class Herosix extends Component {
  render() {
    return (
      <div className="cardss">
        <div className="container">
            <p className="frs">Fresh Fruits</p>
            <h2 className="art">Our Recent News & Articles</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card nethink">
                <img src={cardimg1} />
                <h5>
                  What Final Touchs Can I <br />
                  Add in to My Business
                </h5>
                <p>
                  Place several ready-to-eat washed whole fruits in a bowl or
                  store chopped colorful fruits in a glass bowl in the
                  refrigerator to tempt a sweet tooth.
                </p>
                <div className="str">
                <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                </div>
              
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card nethink">
                <img src={cardimg2} />
                <h5>
                  What Final Touchs Can I <br />
                  Add in to My Business
                </h5>
                <p>
                  Place several ready-to-eat washed whole fruits in a bowl or
                  store chopped colorful fruits in a glass bowl in the
                  refrigerator to tempt a sweet tooth.
                </p>
                <div className="str">
                <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                </div>
              
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card nethink">
                <img src={cardimg3} />
                <h5>
                  What Final Touchs Can I <br />
                  Add in to My Business
                </h5>
                <p>
                  Place several ready-to-eat washed whole fruits in a bowl or
                  store chopped colorful fruits in a glass bowl in the
                  refrigerator to tempt a sweet tooth.
                </p>
                <div className="str">
                <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                </div>
              
              </div>
            </div>
          </div>
          <div className="lern">
          <button className="shop-btn">Learn More</button>
          </div>
       
        </div>
        <div className="container-fluid">
             <div className="card lastsec">
                 <p>Order Now</p>
                 <h2>Get a Fress Samples Delivered to you!</h2>
                 <p> Place several ready-to-eat washed whole fruits in a bowl or
                  store chopped colorful fruits in a glass bowl in the
                  refrigerator to tempt a sweet tooth. Place several ready-to-eat washed whole fruits in a bowl or
                  store chopped colorful fruits in a glass bowl in the
                  refrigerator to tempt a sweet tooth.</p>
                  <div className="lern">
          <button className="shop-btn">Learn More</button>
          </div>
             </div>
        </div>
      </div>
    );
  }
}
