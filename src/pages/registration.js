import React from 'react';
import { res } from '../config/firebase';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline } from "mdbreact";

import Nav from '../components/nav' ;

  import "../css/ClassicFormPage.css";

class Login extends React.Component {
    state = {
        collapseID: ""
      };
    
      toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
      }));
  
    render() {
      const navStyle = { marginTop: "0rem" };
      const overlay = (
        <div
          id="sidenav-overlay"
          style={{ backgroundColor: "transparent" }}
          onClick={this.toggleCollapse("navbarCollapse")}
        />
      );
      return (
        <div id="classicformpage">
          
           <Nav/>
  
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    {/* <h1 className="h1-responsive font-weight-bold">
                      Sign up right now!{" "}
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4">
                     
                    </h6>
                    */}
                  </div>
                  <MDBCol md="6" xl="5" className="mb-4">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="z-depth-2 white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign Up :
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput label="Your Full Name" icon="user" />
                        <MDBInput label="Your email" icon="envelope" />
                        <MDBInput label="Your Age" icon="birthday-cake" type="number" />
                        <MDBInput label="Your Country" icon="globe-americas"  />
                        <MDBInput label="Your City" icon="city"  />
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          type="password"
                        />
                        <MDBInput
                          label="Confrim password"
                          icon="lock"
                          type="password"
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo">Sign Up</MDBBtn>
                          {/* <hr className="hr-light" /> */}
                          {/* <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon fab icon="twitter" className="white-text" />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon fab icon="linkedin-in" className="white-text" />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon fab icon="instagram" className="white-text" />
                            </a>
                          </div> */}
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </div>
      );
    }
}
export default Login;
