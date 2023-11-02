import React, { Component } from "react";
import "./Style.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Backbg from "../Assest/image/nws.jpg";
import Backbg1 from "../Assest/image/nws.jpg";
import juice from "../Assest/image/juice.jpg";
import egg from "../Assest/image/egg.jpg";
import chicken from "../Assest/image/chicken.png";
import milk from "../Assest/image/milk.png";
import fruit from "../Assest/image/friuts.png";
import bread from "../Assest/image/bread.png";
export default class Hero extends Component {
  render() {
    return (
      <div className="cars">
        <Carousel className="carousels">
          <div className="img-text">
            <img src={Backbg} className="back" />
            <p className="legends">WELCOME TO GROCERY STORE</p>
            <h1 className="get-delvied">
              Get the Best and Fresh <br />
              Groceries Delivered
            </h1>
            <p className="organic">
              Organnica is where early adopters and innovation seekers find
              livaly.
              <br />
              Imaginative tech before it hits the mainstream
            </p>
            <button className="shop-btn">Shop Now</button>
          </div>
          <div>
            <img src={Backbg1} className="back" />
          </div>
        </Carousel>

        <div className="container">
          <div className="row allcats">
            <div className="col-lg-2 col-6">
              <div>
                <img src={juice} className="category" />
                <p className="cat">category 1</p>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div>
                <img src={egg} className="category" />
                <p className="cat">category 2</p>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div>
                <img src={chicken} className="category" />
                <p className="cat">category 3</p>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div>
                <img src={milk} className="category" />
                <p className="cat">category 4</p>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div>
                <img src={fruit} className="category" />
                <p className="cat">category 5</p>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div>
                <img src={bread} className="category" />
                <p className="cat">category 6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
