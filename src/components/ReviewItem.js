import React from "react";

function ReviewItem(props) {
  return (
    <div>
      <br />
      <div>{props.review.description}</div>
      <div>{props.review.rating}</div>
    </div>
  );
}

export default ReviewItem;
