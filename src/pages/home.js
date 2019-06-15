import React from 'react';
import "../css/ClassicFormPage.css";
import Nav from '../components/nav'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import SingleLineGridList from '../components/gridList'
import Footer from '../components/footer';
import Search from '../components/user/searchField';
import Gallery from '../components/gallery';
import Slider from '../components/slider'
import DealSlider from '../components/dealSlider'
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';

class home extends React.Component {
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
            <div>
                <div id="classicformpage">
                    <Nav />
                </div>

                <div id='carasoul'>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img 
                                        className="d-block w-100"
                                        src={slide1}
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={slide2}
                                        alt="Second slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={slide3}
                                        alt="Third slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <script src='https://material-ui.com/components/grid-list/#SingleLineGridList.js'></script>


                <Search />
                <SingleLineGridList />
                <Gallery />
                {/* <DealSlider/> */}
                {/* <Slider /> */}
                <Footer />
            </div>


        );
    }
}
export default home;
