import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline } from "mdbreact";
  
  import Nav from '../components/nav' ;
  import "../css/ClassicFormPage.css";
  
  import { countries } from '../config/api'
  import { userRegister } from '../config/firebase';



class Login extends React.Component {
    state = {
        collapseID: "",
        country:[],
        setCity:'',
        city:[]
      };
    
      componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
          const result = await countries();
          console.log(result);
         
          this.setState({
            country:result
          })
          
         
        } catch (e) {
          console.log(e);
        }
    }
 save() {
      const {fullName,email,age,countryInput,city,pwd,img,img1} = this.state
      try {
        const res_city = userRegister(fullName,email,age,countryInput,city,pwd,img,img1);
        console.log(res_city);
       
      } catch (e) {
        console.log("error===>",e);
      }
  }



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
      const { country } = this.state;
      // console.log(this.state)

      return (
        <div id="classicformpage">
          
           <Nav/>
  
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  </div>
                  <MDBCol md="6" xl="5" className="mb-4">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="z-depth-2 white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign Up :
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput label="Your Full Name" icon="user" onChange={(e)=>{this.setState({fullName:e.target.value})}} />
                        <MDBInput label="Your email" icon="envelope"  onChange={(e)=>{this.setState({email:e.target.value})}}/>
                        <MDBInput label="Your Age" icon="birthday-cake" type="number" onChange={(e)=>{this.setState({age:e.target.value})}}/>
                        <select style={{backgroundColor:"#ff000000",color:'#9E9E9E !important'}} onChange={(e)=>{this.setState({countryInput:e.target.value})}}  className="form-control">
                        <option unselectable>Country...</option>
                          {
                            country.map((res)=>{
                              return(<option>{res.name}</option>)
                            })
                          }
                        </select>
                        <MDBInput label="Your City" icon="city"  onChange={(e)=>{this.setState({city:e.target.value})}}/>
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>{this.setState({pwd:e.target.value})}}
                        />
                        <MDBInput
                          label="Confrim password"
                          icon="lock"
                          type="password"
                          onChange={(e)=>{this.setState({cnfrm_Pwd:e.target.value})}}
                        />
                         <MDBInput
                         
                          icon="lock"
                          id="file-input" 
                          type="file" 
                          onChange={(e)=>{this.setState({img:e.target.value,img1:e.target.files[0]})}}
                        />
                        

                        <div className="text-center mt-4 black-text">
                          <MDBBtn color="indigo" onClick={()=>this.save()}>Sign Up</MDBBtn>
                         
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
