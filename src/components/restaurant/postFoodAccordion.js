import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon, MDBNavLink, MDBNav } from "mdbreact";
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { postFood } from '../../config/firebase';



class CollapsePage extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

        save() {
            const {name,price,description,category,img,img1} = this.state
            try {
              const res_city = postFood(name,price,description,category,img,img1);
              console.log(res_city);
             
            } catch (e) {
              console.log("error===>",e);
            }
        }



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

                            Post Ad
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

                                <div id="postAccordion">

                                    <MDBContainer>
                                        <MDBRow>
                                            <MDBCol md="12">
                                                <form>
                                                    <p className="h5 text-center mb-4">Post</p>
                                                    <div className="grey-text">
                                                        <MDBInput
                                                            label="Your name"
                                                            icon="user"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            onChange={(e)=>{this.setState({name:e.target.value})}}
                                                        />
                                                        <MDBInput
                                                            label="Price"
                                                            icon="price"
                                                            group
                                                            type="number"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            onChange={(e)=>{this.setState({price:e.target.value})}}
                                                        />
                                                        <MDBInput
                                                            label="Description"
                                                            icon="exclamation-triangle"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            onChange={(e)=>{this.setState({description:e.target.value})}}
                                                        />
                                                        <MDBInput
                                                            label="Category"
                                                            icon="exclamation-triangle"
                                                            group
                                                            type="text"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            onChange={(e)=>{this.setState({category:e.target.value})}}
                                                        />
                                                        <MDBInput
                                                            // label="Image"
                                                            icon="exclamation-triangle"
                                                            group
                                                            type="file"
                                                            validate
                                                            error="wrong"
                                                            success="right"
                                                            onChange={(e)=>{this.setState({img:e.target.value,img1:e.target.files[0]})}}
                                                        />


                                                    </div>
                                                    <div className="text-center">
                                                        <MDBBtn color="primary" onClick={()=>this.save()}>Post</MDBBtn>
                                                    </div>
                                                </form>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBContainer>


                                </div>

                            </MDBCardBody>
                        </MDBCollapse>
                        <hr class="mb-0" />
                    </MDBCard>

                </MDBContainer>
            </MDBContainer>
        );
    }
}

export default CollapsePage;