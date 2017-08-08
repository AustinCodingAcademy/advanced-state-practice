import React from "react";

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
    this.handleReviewClick = this.handleReviewClick.bind(this);
  }

  handleReviewClick() {
    this.setState(function(prevState) {
      return {
        visible: !prevState.visible
      }
    });
  }

  render() {
    let reviews = this.props.product;
    let numOfReviews = reviews.length;

    const reviewDiv = reviews.map(review => {
      if(this.state.visible) {
        return (
          <div>
            <p>{review.description} {review.rating}</p>
          </div>
        )
      }
    });

    return (
        <div onClick={this.handleReviewClick}>
          {numOfReviews} review{numOfReviews <= 1 ? " " : "s" }
          <div>{reviewDiv}</div>
        </div>
    );
  }
}

export default Reviews;
