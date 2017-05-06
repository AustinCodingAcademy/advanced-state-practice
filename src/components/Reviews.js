import React, {Component} from "react";
import PropTypes from "prop-types";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.product.reviews,
      reviewText: "Reviews",
      reviewDetails: this.props.product.reviewDetails
    };
  }

  showReviewDetails() {
    return this.state.reviewDetails.map((each, index) => {
      return (
        <p key={index}>
          {each.description}
        </p>
      );
    });
  }

  render() {
    console.log(this.showReviewDetails());
    if (this.state.reviews <= 1) {
      this.setState({
        reviewText: "Review"
      });
    }
    return (
      <div onClick={this.props.toggleReviews}>
        {this.state.reviews} {this.state.reviewText}
        {this.props.showReviews && this.showReviewDetails()}
      </div>
    );
  }
}

Reviews.propTypes = {
  showReviews: PropTypes.bool.isRequired,
  toggleReviews: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

export default Reviews;
