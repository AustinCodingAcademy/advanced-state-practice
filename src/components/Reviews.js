import React from "react";

class Reviews extends React.Component {
  constructor(){
    super();
    this.state = {
      visible: false
    }

    this.numOfReviews = "";
    this.reviewList = [];
  }

  handleReviewClick = ()=> {
    if(this.state.visible) {
      this.reviewList = [];
    } else {
      this.reviewList = this.props.reviews.map((review, indx) => {
        return <li key={indx}>{review.description}</li>
      })
    }
    this.setState({visible:!this.state.visible});
  }

      render() {
          if (this.props.reviews.length === 1) {
            this.numOfReviews = <p onClick={this.handleReviewClick}>1 <a>review</a></p>;
          } else {
            this.numOfReviews = <p onClick={this.handleReviewClick}>{this.props.reviews.length} <a>reviews</a></p>;
          }
        return(
          <div>
            {this.numOfReviews}
            <ol>
              {this.reviewList}
            </ol>
          </div>
      );
    }
  }


export default Reviews;
