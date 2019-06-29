import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'
import Chip from '@material-ui/core/Chip';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { order } from "../../config/firebase";


class FoodList extends React.Component {
 
  order() {
    this.setData();
}

async setData() {

   
    try {
        const res_city = await order(this.props.food_id,this.props.restaurant_id);
        console.log(res_city);
        if (res_city) {
            // console.log("props-->", this.props);
            // this.overlay(false);
            // this.props.props.history.push('/restaurantDashboard');
        }

    } catch (e) {
        console.log("error===>", e);
    }
}

  render() {
    // console.log(this.props.foodRef);
    // restaurant_id
    // id._key.path.segments[6]
    console.log(this.props);

    return (
      <div class="ui celled grid">
        <div class="row">
          <div class="three wide column">
            <img src={this.props.url} class="ui image" />
          </div>
          <div class="ten wide column">
            <blockquote className="blockquote bq-primary">
              <h2><Link to={{
                pathname:'/individualFood',
                food: this.props.foodRef,
              }}>{this.props.title}</Link></h2>
              <strong className="bq-title">{this.props.title}</strong>
              <br />
              <br />
              <b>Rs: {this.props.price}/-</b>
            </blockquote>
          </div>
          <div class="three wide column justifyContent">

            <button onClick={()=>this.order()}>Order Now</button>

          </div>

        </div>
      </div>
    )
  }

}

export default FoodList