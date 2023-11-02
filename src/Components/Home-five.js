import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import fr1 from "../../src/Assest/image/friuts.png";
import chickens from "../Assest/image/chicken.png";
import milks from "../Assest/image/milk.png";
import breads from "../Assest/image/bread.png";
import fulls from "../Assest/image/fullsfruts.png";

export default class Herofive extends Component{
    render(){
        return(
            <>
            <div className="container listout-1">
<h4 className="tend">Trending Products</h4>
<div className="listout">
    <p>Fruits</p>
    <p>Veg</p>
    <p>Diet Food</p>
    <p>Dary</p>
</div>
<br />

</div>
<div className="container">
<Carousel className="carousels-1 newsa">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-4 ">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4">
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
                    <div className="col-lg-2 col-md-2 col-4 ">
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
                  </div>
                </Carousel>
</div>

<div className="container-fluid">
    <div className="cent">
    <h1 className="joinover">Join Over 958 Vendors,<br/>
 Shell with us Today!</h1>
    </div>
    <button className="regis">REGISTER AS VENDORS</button>
    <img src={fulls} className="fullimgs" />
</div>
            </>

        );
    }
}