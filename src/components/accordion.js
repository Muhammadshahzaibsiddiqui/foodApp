import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon, MDBNavLink, MDBNav } from "mdbreact";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class CollapsePage extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <MDBContainer>
                <MDBContainer
                    className="accordion md-accordion accordion-3 z-depth-1-half"
                    style={{ backgroundColor: "#fff", padding: "0" }}
                >


                    <MDBCard>

                        <div style={{ padding: '1%' }} onClick={this.toggleCollapse("collapse1")}
                            tag="h3"
                            tagClassName="red-text d-flex justify-content-between align-items-center">

                            Find You Location
                              <MDBIcon
                                icon={
                                    this.state.collapseID === "collapse1"
                                        ? "angle-up"
                                        : "angle-down"
                                }
                                className="red-text"
                                size="2x"
                                style={{ float: 'right' }}
                            />
                        </div>

                        <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
                            <MDBCardBody class="pt-0">
                            <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />

                            </MDBCardBody>
                        </MDBCollapse>
                        <hr class="mb-0" />
                    </MDBCard>
                   
                </MDBContainer>
            </MDBContainer>
        );
    }
}
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))

export default CollapsePage;