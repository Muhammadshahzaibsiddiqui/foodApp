import React from 'react';
import { res } from '../config/firebase';
import '../css/ClassicFormPage.css'
import Nav from '../components/nav'
import Tabs from '../components/restaurant/tabs';
import Footer from '../components/footer';
import { Chat } from 'react-chat-popup';

class userDashboard extends React.Component {
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
        <div>
          <Nav />
        </div>
        
        <Tabs />
        <Chat handleNewUserMessage={this.handleNewUserMessage} profileAvatar={'logo'}
                    title="My new awesome title"
                    subtitle="And my cool subtitle" />
        <Footer />
      </div>
    );
  }
}
export default userDashboard;
