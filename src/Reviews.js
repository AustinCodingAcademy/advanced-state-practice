import React, {Component} from "react";


export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.product.reviews,
      reviewInfo: "Reviews",
      reviewDetail: this.props.product.reviewDetail
  }
}

  displayReviews() {
    return this.state.reviewDetail.map((every, index) =>{
      return (
        <h6 key={index}>
          {every.description}
      )
    }
    )
  }

  render() {
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

-  }
}
