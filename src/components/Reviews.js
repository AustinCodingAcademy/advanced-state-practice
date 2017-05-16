import React, {Component} from "react";


class Reviews extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let reviewList = "";
    if (this.state.visible) {
      reviewList = this.props.reviews.map((review) => {
        return <div>
          {review.description}
        </div>;
      });
    }


    return <div>
      <button onClick={() => {
        this.setState({
          visible: !this.state.visible
        });
      }
      }>Review</button>
      {reviewList}
    </div>;
  }





}

export default Reviews;
