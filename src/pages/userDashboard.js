import React from 'react';
import { res } from '../config/firebase';
import "../css/ClassicFormPage.css";
import Nav from '../components/nav'
import Tabs from '../components/user/tabs';
import Footer from '../components/footer';

class userDashboard extends React.Component {
  state = {
    collapseID: ""
  };
  // componentDidMount() {
  //   addResponseMessage("Welcome to this awesome chat!");
  // }
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
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

    return (
      <div id="classicformpage">
        <div>
          <Nav />
        </div>
       
        <Tabs />
        <Footer />
      </div>
    );
  }
}
export default userDashboard;
