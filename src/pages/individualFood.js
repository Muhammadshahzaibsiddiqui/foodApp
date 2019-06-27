import React from 'react';
import { res } from '../config/firebase';
import "../css/ClassicFormPage.css";
import Nav from '../components/nav'
import Tabs from '../components/user/tabs';
import Footer from '../components/footer';
import { Chat } from 'react-chat-popup';
import IndividualFoodList from '../components/individualFoodList';
import Comment from '../components/comment';

const TypoHead = () => (
    <>
        <blockquote className="blockquote bq-primary">
            <strong className="bq-title">BBQ Restaurant</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo!
              Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
              Sit, rem, in?
          </p>
        </blockquote>
    </>
);
class individualFood extends React.Component {
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
        // console.log(this.props.location.food.name);
        // console.log(this.props.location.food.price);
        // console.log(this.props.location.food.img_URL);

            const name =this.props.location.food.name
            const price =this.props.location.food.price
            const url =this.props.location.food.img_URL
            
        return (
            <div id="classicformpage">
                <div>
                    <Nav />
                </div>
                <div id='coverPhoto'>
                    <img style={{ width: '100%' }} src='https://d1qp59yxlq7zhd.cloudfront.net/media/late-night-restaurants-bangalore-cover.jpg' />
                </div>

                <div style={{ paddingLeft: '3%', paddingTop: '1%' }}> {TypoHead()}</div>

                <Chat handleNewUserMessage={this.handleNewUserMessage} profileAvatar={'logo'}
                    title="My new awesome title"
                    subtitle="And my cool subtitle" />
                <IndividualFoodList url={url} title={name} />
                <Comment/>
                <Footer />
            </div>
        );
    }
}
export default individualFood;
