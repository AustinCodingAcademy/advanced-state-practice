import React, {Component} from "react";
import PropTypes from "prop-types";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.product.review,
      reviewText: "Reviews",
      reviewDetails: this.props.product.reviews
    };
  }

  showReviewDetail() {
    return this.state.reviewDetails.map((reviewDetails,index) => {
      return (
        <p key={index}>
          {this.state.reviewDetails[index].description}
        </p>
      ); // end of map
    }); // end of return
  } // end of function

  render() {
// console.log(this.props.product)
    if (this.state.reviews <= 1) {
      this.setState({
        reviewText: "Nothing"
      }); // turning it "true"
    }
    return (
      <div>
        <div onClick={this.props.toggleReview}>
          {this.state.review} {this.props.product.reviews.length} {this.state.reviewText} 
          {this.props.showReview && this.showReviewDetail()}
        </div>
      </div>
    ); // end of return
  } // end of return
} // end of render


Review.propTypes = {
  product: PropTypes.object,
  toggleReview: PropTypes.func
};

export default Review;
