import React, { Component } from "react";

class Reviews extends Component {

  constructor() {
    super();
  }

  render() {
    const { reviews } = this.props.product;
    let reviewListItems = "";

    if (this.props.visible) {
      reviewListItems = reviews.map((review, index) => {
        return <li key={index}>{review.description}</li>;
      });
    } else {
      reviewListItems = "";
    }

    return (
      <div className="reviews">
        <ol>
          {reviewListItems}
        </ol>
      </div>
    );
  }
}

export default Reviews;
