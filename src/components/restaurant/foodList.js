import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'
import Chip from '@material-ui/core/Chip';


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
              <h2>BBQ Restaurant</h2>
              <strong className="bq-title">{this.props.title}</strong>
              <br />
              <br />
              <b>Rs: 100/-</b>
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