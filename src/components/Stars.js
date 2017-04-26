import React from "react";

function Stars(props) {
  const starArr = [];
  for (let i = 0; i < props.starRating; i++) {
    starArr.push(<span className="glyphicon glyphicon-star" />);
  }
  return (
    <div>
      {starArr}
    </div>
  );

}

export default Stars;
