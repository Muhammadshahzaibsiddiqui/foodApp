import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../css/ClassicFormPage.css";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Food Point</h5>
            <p>
            There are plenty of restaurants available for you to order food online with home delivery.
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Karachi</h5>
            <ul>
            <li className="list-unstyled">
                <a href="#!">Pakistani</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">American</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Italian</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pizza</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Islamabad</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Burger</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pizza</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">American</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pakistani</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Lahore</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Pizza</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Burger</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">American</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Fast Food</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> FoodPoint </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;