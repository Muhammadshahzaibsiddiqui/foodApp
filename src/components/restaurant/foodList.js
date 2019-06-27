import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'
import Chip from '@material-ui/core/Chip';
import { BrowserRouter as Router, Link } from "react-router-dom";


class FoodList extends React.Component {


  render() {
    // console.log(this.props);

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
              <strong className="bq-title">{this.props.description}</strong>
              <br />
              <br />
              <b>Rs:{this.props.price}/-</b>
            </blockquote>
          </div>
          <div class="three wide column justifyContent">

            <button>{this.props.progress}</button>

          </div>

        </div>
      </div>
    )
  }

}

export default FoodList