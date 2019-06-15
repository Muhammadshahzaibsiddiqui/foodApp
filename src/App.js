import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Registration from './pages/registration';
import UserDashboard from './pages/userDashboard';
import RestaurantDashboard from './pages/restaurantDashboard';
import Home from './pages/home';
class App extends Component {
  render() {
    return (
      <div >
        {/* <Login/>   */}
        {/* <Registration/> */}
        {/* <UserDashboard /> */}
        {/* <RestaurantDashboard/> */}
        <Home/>
      </div>
    );
  }
}

export default App;
