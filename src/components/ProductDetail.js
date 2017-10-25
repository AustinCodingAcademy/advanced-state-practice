import React from "react";
//import ReactDOM from 'react-dom';
import Reviews from './Reviews';

function ProductDetail(props) {
  const {id,name,description,rating,imgUrl,reviews} = props.product;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span className="glyphicon glyphicon-star" key={i} />);
  }
  const reviewDivs = [];
  for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i].description);
    reviewDivs.push(<p key={`review_${i}_for${id}`} > {reviews[i].description} - Rating:  {reviews[i].rating}</p>);
  }
  const reviewQuantity = reviews.length;

  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
        <div className="caption">
          <h4><a href="#">{name}</a>
          </h4>
          <p>{description}
          </p>
          </div>
          <div className="ratings">
            <Reviews
            reviews={reviews}
            reviewDivs={reviewDivs}
            reviewQuantity={reviewQuantity} />
          </div>
          <p>
            {stars}
          </p>
        </div>
    </div>
  );
}
export default ProductDetail;
