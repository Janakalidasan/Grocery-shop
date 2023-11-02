import React, { Component } from "react";
import "./Style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Recomdimg from "../../src/Assest/image/revt.jpg";
import bagfr from "../../src/Assest/image/bagfru.jpg";
import fr1 from "../../src/Assest/image/friuts.png";
import chickens from "../Assest/image/chicken.png";
import milks from "../Assest/image/milk.png";
import { Carousel } from "react-responsive-carousel";
import breads from "../Assest/image/bread.png";
import sidefru from "../Assest/image/side-fru.png";

export default class herothree extends Component {
  constructor() {
    super();
    this.state = {
      targetDate: new Date("2023-11-2"), // Set your target date here
      currentDate: new Date(),
    };
  }

  calculateTimeDifference = () => {
    const { targetDate, currentDate } = this.state;

    const timeDifference = targetDate - currentDate;
    const millisecondsInSecond = 1000;
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;
    const daysInYear = 365;

    const seconds =
      Math.floor(timeDifference / millisecondsInSecond) % secondsInMinute;
    const minutes =
      Math.floor(timeDifference / (millisecondsInSecond * secondsInMinute)) %
      minutesInHour;
    const hours =
      Math.floor(
        timeDifference /
          (millisecondsInSecond * secondsInMinute * minutesInHour)
      ) % hoursInDay;
    const days =
      Math.floor(
        timeDifference /
          (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)
      ) % daysInYear;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  render() {
    const timeDifference = this.calculateTimeDifference();
    return (
      <>
        <div className="container topps">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 borde">
              <div>
                <h5>Deal of the Day</h5>
                <Carousel className="carouselss">
                  <div className="img-text">
                    <img src={Recomdimg} className="back-1" />
                    <p className="foodgro">Grocery Foods</p>
                    <h5 className="premium">
                      Premium Grocery Basket with 10+
                      <br />
                      Daily needs items
                    </h5>
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <p>(12 Reviews)</p>
                    </div>
                    <h5 className="dols">$59.00</h5>
                    <div className="sold">
                      <p>Instock :41</p>
                      <p>Sold:11</p>
                    </div>
                    <h4 className=" card tracklie"></h4>
                    <div className="times">
                      <p>
                        {timeDifference.days}
                        <br />
                        Day
                      </p>
                      <p>
                        {timeDifference.hours}
                        <br />
                        HH
                      </p>
                      <p>
                        {timeDifference.minutes} <br />
                        MM
                      </p>
                      <p>
                        {timeDifference.seconds}
                        <br />
                        SS
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="img-text">
                      <img src={bagfr} className="back-1" />
                      <p className="foodgro">Grocery Foods</p>
                      <h5 className="premium">
                        Premium Grocery Basket with 10+
                        <br />
                        Daily needs items
                      </h5>
                      <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                      </div>
                      <h5 className="dols">$59.00</h5>
                      <div className="sold">
                        <p>Instock :41</p>
                        <p>Sold:11</p>
                      </div>
                      <h4 className=" card tracklie"></h4>
                      <div className="times">
                        <p>
                          {timeDifference.days}
                          <br />
                          Day
                        </p>
                        <p>
                          {timeDifference.hours}
                          <br />
                          HH
                        </p>
                        <p>
                          {timeDifference.minutes} <br />
                          MM
                        </p>
                        <p>
                          {timeDifference.seconds}
                          <br />
                          SS
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div>
                <h5 className="re-for">Recommendation For You</h5>
                <Carousel className="carousels-1">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-6 ">
                      <img src={fr1} className="fr" />
                      <h5 className="dols">$21.00</h5>
                      <h5 className="premium-1">Fresh Furits</h5>
                      <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                        <button className="shop-btn-1">
                          <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add to
                          Chart
                        </button>
                        <div className="comp">
                          <p>Compare</p>
                          <p>Wishlist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <img src={chickens} className="fr" />
                      <h5 className="dols">$21.00</h5>
                      <h5 className="premium-1">Fresh Furits</h5>
                      <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                        <button className="shop-btn-1">
                          <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add to
                          Chart
                        </button>
                        <div className="comp">
                          <p>Compare</p>
                          <p>Wishlist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <img src={milks} className="fr" />
                      <h5 className="dols">$21.00</h5>
                      <h5 className="premium-1">Fresh Furits</h5>
                      <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                        <button className="shop-btn-1">
                          <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add to
                          Chart
                        </button>
                        <div className="comp">
                          <p>Compare</p>
                          <p>Wishlist</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-6">
                      <img src={breads} className="fr" />
                      <h5 className="dols">$21.00</h5>
                      <h5 className="premium-1">Fresh Furits</h5>
                      <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <p>(12 Reviews)</p>
                        <button className="shop-btn-1">
                          <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add to
                          Chart
                        </button>
                        <div className="comp">
                          <p>Compare</p>
                          <p>Wishlist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* sec-car0sel */}
                  <div>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-6">
                        <img src={fr1} className="fr" />
                        <h5 className="dols">$21.00</h5>
                        <h5 className="premium-1">Fresh Furits</h5>
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <p>(12 Reviews)</p>
                          <button className="shop-btn-1">
                            <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add
                            to Chart
                          </button>
                          <div className="comp">
                            <p>Compare</p>
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-6">
                        <img src={chickens} className="fr" />
                        <h5 className="dols">$21.00</h5>
                        <h5 className="premium-1">Fresh Furits</h5>
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <p>(12 Reviews)</p>
                          <button className="shop-btn-1">
                            <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add
                            to Chart
                          </button>
                          <div className="comp">
                            <p>Compare</p>
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-6">
                        <img src={milks} className="fr" />
                        <h5 className="dols">$21.00</h5>
                        <h5 className="premium-1">Fresh Furits</h5>
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <p>(12 Reviews)</p>
                          <button className="shop-btn-1">
                            <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add
                            to Chart
                          </button>
                          <div className="comp">
                            <p>Compare</p>
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-3 col-6">
                        <img src={breads} className="fr" />
                        <h5 className="dols">$21.00</h5>
                        <h5 className="premium-1">Fresh Furits</h5>
                        <div>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <p>(12 Reviews)</p>
                          <button className="shop-btn-1">
                            <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add
                            to Chart
                          </button>
                          <div className="comp">
                            <p>Compare</p>
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
              {/* botom imag */}
              <div>
                <div className="card tast0card">
                    <div className="row">
                           <div className="col-lg-6 col-md-6 col-sm-12 lef-sev">
                                <div>
                                <h4>FRESH & ORGANIC</h4>
                                 <h3>Mega Basket</h3>
                                 <p>Shop Now&nbsp;&nbsp;<i class="fa-solid fa-chevron-right" style={{color:"#183153"}}></i></p>
                                </div>
                            
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-12 si-frs">
                                <img src={sidefru} className="sidefr"/>
                           </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
