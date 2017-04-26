import React from "react";
import Stars from "./Stars"

class Reviews extends React.Component {
  constructor(props) {
    super();
    this.state = {
      visible: false,
    };
  }


  render() {
    var reviewArr = this.props.reviews;
    let reviewDivs = "";
    if(this.state.visible)
    {

      reviewDivs = reviewArr.map(function (review, index) {
      return <div>
      <p className="pull-right"><Stars starRating={review.rating} /></p>
      <p key={index}>{review.description}</p>
      </div>})
    }
      else{
        reviewDivs = "";
      }
    return (
      <div>
      <span>
        <i className={this.state.visible ? "fa fa-caret-down" : "fa fa-caret-right"} onClick={(e)=>{

          this.setState({
            visible:!this.state.visible
          });
        }
      }>  {reviewArr.length} {reviewArr.length > 1 ? "Reviews" : "Review"}</i>
      </span>

      {reviewDivs}

    </div>
    );
  }

}

export default Reviews;
