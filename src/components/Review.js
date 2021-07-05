import React from "react";
import ReviewItem from "./ReviewItem";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  reviewsMethod() {
    const revNum = this.props.product.reviews.length;
    const message = revNum === 1 ? "review" : "reviews";
    return revNum + " " + message;
  }

  toggleHidden() {
    this.setState({
      visible: !this.state.visible
    });
  }

  revItems() {
    return (
      this.props.product.reviews.map((e, i) => {
        return (
          <ReviewItem key={i} review={e} />
        );
      })
    );
  }

  render() {
    return (
      <div onClick={() => {this.toggleHidden();}}>
        <span>{this.reviewsMethod()}</span>
        <div>
          {this.state.visible ? this.revItems() : ""}
        </div>
      </div>
    );
  }
}

export default Review;
