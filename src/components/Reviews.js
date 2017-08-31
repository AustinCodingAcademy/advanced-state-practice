import React from "react";

class Reviews extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
    }
  }
// Default to hidden, changing state below to effect change when toggled
  toggleHide() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    let plural = "";
    if (this.props.product.reviews.length > 1) {
      plural = "s";
    }
    const reviewsDiv = this.props.product.reviews.map((review) => {
      return (
        <div>
          <p>Rating: {review.rating}</p>
        </div>
      )
    }
  );
return (
  <div>
    <div className="pull-right" onClick={() => {
      this.toggleHide()
    }}>{this.props.product.reviews.length} review{plural}</div>

  {this.state.hidden ? <div /> : reviewsDiv }
  </div>
    )
  }
}

export default Reviews;
