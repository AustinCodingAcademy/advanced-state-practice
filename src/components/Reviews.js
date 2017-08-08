import React from "react";

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
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

        <div>
          {numOfReviews} review{numOfReviews <= 1 ? " " : "s" }
          <div>{reviewDiv}</div>
        </div>

    );
  }
}

export default Reviews;
