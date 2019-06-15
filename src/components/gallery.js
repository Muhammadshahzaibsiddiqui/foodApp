import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBMask, MDBView } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../css/gallery.css";
import Karachi from '../images/cities/Karachi.jpg'
import Faisalabad from '../images/cities/Faisalabad.jpg'
import Hyderabad from '../images/cities/Hyderabad.jpg'
import Islamabad from '../images/cities/Islamabad.jpg'
import Lahore from '../images/cities/Lahore.jpg'
import Multan from '../images/cities/Multan.jpg'
import Peshawar from '../images/cities/Peshawar.jpg'
import Rawalpindi from '../images/cities/Rawalpindi.jpg'
import Sukkur from '../images/cities/Sukkur.jpg'
import Sialkot from '../images/cities/Sialkot.jpg'

class Gallery extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
       Karachi,
       Faisalabad,
       Hyderabad,
       Islamabad,
       Lahore,
       Multan,
       Peshawar,
       Rawalpindi,
       Sukkur,
       Sialkot

    ],
    cities:[ 
      'Karachi',
      'Faisalabad',
      'Hyderabad',
      'Islamabad',
      'Lahore',
      'Multan',
      'Peshawar',
      'Rawalpindi',
      'Sukkur',
      'Sialkot']
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="3" key={photoIndex}>
          <figure>
            <MDBView hover zoom>
              <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
              />
              <a href='#'>
                <MDBMask className="flex-center" overlay="red-strong">
                  <strong className="white-text">{this.state.cities[photoIndex]}</strong>
                </MDBMask>
              </a>
            </MDBView>
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5">
        <h2 className="font-weight-bold my-5 text-center">Find us in your city</h2>
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>

      </MDBContainer>



    );
  }
}

export default Gallery;