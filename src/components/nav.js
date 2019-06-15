import React from 'react';
import { res } from '../config/firebase';
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from "mdbreact";
import logo from '../images/logo4.png';
import "../css/ClassicFormPage.css";

class Nav extends React.Component {
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
                <Router>
                    <div>
                        <MDBNavbar style={navStyle} dark expand="md" >
                            <MDBContainer>
                                <MDBNavbarToggler
                                    onClick={this.toggleCollapse("navbarCollapse")}
                                />
                                <MDBCollapse
                                    id="navbarCollapse"
                                    isOpen={this.state.collapseID}
                                    navbar
                                >
                                </MDBCollapse>
                                   
                                    <MDBNavbarNav center>
                                        <MDBNavItem active>
                                            <MDBNavbarBrand>
                                                <img src={logo} height='60'/>
                                            </MDBNavbarBrand>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                          
                            </MDBContainer>
                        </MDBNavbar>
                    </div>
                </Router>

            </div>
        );
    }
}
export default Nav;
