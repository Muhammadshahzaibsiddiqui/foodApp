import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from "mdbreact";


import "../css/ClassicFormPage.css";

import { countries } from '../config/api'
import { restaurantRegister } from '../config/firebase';


class RestaurantRegistation extends React.Component {
    constructor(props) {
        super(props);
        this.overlay = this.overlay.bind(this)
    };

    state = {
        collapseID: "",
        country: [],
        setCity: '',
        city: [],
        isActive: false,
        user: true,
        restaurant: false,
        radio: 1
    }
    componentDidMount() {
        this.fetchData();
    }


    async fetchData() {
        try {
            const result = await countries();
            console.log(result);

            this.setState({
                country: result
            })


        } catch (e) {
            console.log(e);
        }
    }

    overlay(res){
        this.props.response(res)
    }
    save() {
        // console.log(this.props.response(true));
        this.overlay(true);
        this.setData();
    }

    async setData() {

        const { fullName, email, age, countryInput, city, pwd, img, img1 } = this.state
        try {
            const res_city = await restaurantRegister(fullName, email, age, countryInput, city, pwd, img, img1);
            console.log(res_city);
            if (res_city) {
                // console.log("props-->", this.props);
                this.overlay(false);
                this.props.props.history.push('/restaurantDashboard');
            }

        } catch (e) {
            console.log("error===>", e);
        }
    }
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const navStyle = { marginTop: "0rem" };

        const { country, isActive } = this.state;
        // console.log(this.state)

        return (

            <div id="classicformpage">


                <MDBInput label="Restaurant Name" icon="user" onChange={(e) => { this.setState({ fullName: e.target.value }) }} />
                <MDBInput label="Your email" icon="envelope" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <select style={{ backgroundColor: "#ff000000", color: '#9E9E9E !important' }} onChange={(e) => { this.setState({ countryInput: e.target.value }) }} className="form-control">
                    <option unselectable>Country...</option>
                    {
                        country.map((res) => {
                            return (<option>{res.name}</option>)
                        })
                    }
                </select>
                <MDBInput label="Your City" icon="city" onChange={(e) => { this.setState({ city: e.target.value }) }} />
                <MDBInput
                    label="Your password"
                    icon="lock"
                    type="password"
                    onChange={(e) => { this.setState({ pwd: e.target.value }) }}
                />
                <MDBInput
                    label="Confrim password"
                    icon="lock"
                    type="password"
                    onChange={(e) => { this.setState({ cnfrm_Pwd: e.target.value }) }}
                />
                <MDBInput

                    icon="lock"
                    id="file-input"
                    type="file"
                    onChange={(e) => { this.setState({ img: e.target.value, img1: e.target.files[0] }) }}
                />


                <div className="text-center mt-4 black-text">
                    <MDBBtn color="indigo" onClick={() => this.save()}>Sign Up</MDBBtn>

                </div>

            </div>
        );
    }
}
export default RestaurantRegistation;
