import React, { Component } from "react";
import shop1 from '../Assest/image/shop-1.avif'
import shop2 from '../Assest/image/shop-2.avif'
import shop3 from '../Assest/image/shop-3.jpg'
import shop4 from '../Assest/image/shop-4.avif'
import shop5 from '../Assest/image/shop-7.avif'
import shop6 from '../Assest/image/shop-6.avif'
import delivaryman from '../../src/Assest/image/egg-1.png';
import Allfoods from '../../src/Assest/image/Allfoods.png';
export default class Herofour extends Component{
    render(){
        return(
<div>
<div className="container yes">
     <div className="row">
            <div className="col-lg-2 col-md-2 col-6">
                 <img src={shop1} className="shops"/>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
            <img src={shop2} className="shops"/>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
            <img src={shop3} className="shops"/>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
            <img src={shop4} className="shops"/>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
            <img src={shop5} className="shops"/>
            </div>
            <div className="col-lg-2 col-md-2 col-6">
            <img src={shop6} className="shops"/>
            </div>
     </div>
</div>
{/* cards2 */}
<div className="container">
<div className="row">
<div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card newthinks">
                 <div className="row">
                        <div className="col-7 first-org">
                            <p>Organic & Fresh</p>
                            <h4>Get Fresh Grocery<br />Delivered to You!</h4>
                            <p>Discount <span>50%</span></p>
                        </div>
                        <div className="col-5 delb">
                           <img src={delivaryman} className="delivaryman"/>
                        </div>
                 </div>
            </div>
          </div>


          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card newthinks-2">
            <div className="row">
                        <div className="col-6 first-org">
                            <h4>Organic Food <br/> at Doorstep!</h4>
                            <p>Contact Less Home<br />Delivery</p>
                           
                        </div>
                        <div className="col-6 delb">
                           <img src={Allfoods} className="supermarket-1"/>
                        </div>
                 </div>
            </div>
          </div>
</div>
</div>

</div>
        );
    }
}