import React from 'react';
import Home from '../pages/home';
import Registration from '../pages/registration';
import Login from '../pages/login';
import UserDashboard from '../pages/userDashboard';
import RestaurantDashboard from '../pages/restaurantDashboard';
import IndividualFood from '../pages/individualFood'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export default function Navigator() {
    
    return (
        <Router>
            <ul id='navigator' className='justifyContent'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/registration'>Registration</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/userDashboard'>User</Link></li>
                <li><Link to='/restaurantDashboard'>Restaurant</Link></li>
                <li><Link to='/individualFood'>Food Page</Link></li>
            </ul>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/registration' component={Registration} />
                <Route path='/login' component={Login} />
                <Route path='/userDashboard' component={UserDashboard} />
                <Route path='/restaurantDashboard' component={RestaurantDashboard} />
                <Route path='/individualFood' component={IndividualFood} />
            </div>
        </Router>
    );
}