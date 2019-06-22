import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";

class restaurantsDeal extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
          <img src="https://1ue0vq2ip2m91b3g7z258a5v-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/bbq_chicken_skewers_recipe.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpghttps://www.barbequesgalore.com.au/bbq-expert/wp-content/uploads/2015/09/bbq-grilling-steak-590-740x480.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://8cadcdcc1dae599a02ac-23955a5d10ac8d0514690937bf471181.ssl.cf1.rackcdn.com/Theismanns-Restaurant-Food-2.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/_800x1000_fit_center-center/chens-chinese-food.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://www.kfc.com.au/sites/default/files/WEBSITE_CATERING_768x432px_V2.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://www.squishykiosk.com/media/catalog/product/cache/17/image/800x/040ec09b1e35df139433887a97daa66f/2/0/20180725_043.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default restaurantsDeal;