import React, {Component} from "react";
import Description from "./Description";

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      isShown: false
    };
  }
  render() {
    const numOfReviews = this.props.reviews.length;
    let reviewText = "";
    if (numOfReviews > 1) {
      reviewText = "reviews";
    } else {
      reviewText = "review";
    }
    const listOfDescriptions = this.props.reviews.map(review => {
      return <Description description={review.description} />;
    });

    const list = this.state.isShown ? listOfDescriptions : "";
    return (
      <div>
        <button onClick={() => {
          this.setState({isShown: !this.state.isShown});
        }}>{numOfReviews} {reviewText}</button>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default Reviews;
