import React from 'react'
// import { Grid, Image } from 'semantic-ui-react'

class FoodList extends React.Component{
  
  render(){
  return(
  <div class="ui celled grid">
  <div class="row">
    <div class="five wide column">
      <img src={this.props.url} class="ui image" />
      <button>Order Now</button>
    </div>
    <div class="sixteen wide column">
    <blockquote className="blockquote bq-primary">
            <strong className="bq-title">{this.props.title}</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam dignissimos itaque harum illo!
              Quidem, corporis at quae tempore nisi impedit cupiditate perferendis nesciunt, ex dolores doloremque!
              Sit, rem, in?
          </p>
          <b>Rs: 100/-</b>
        </blockquote>
    </div>
  </div>
</div>
)
}

}

export default FoodList