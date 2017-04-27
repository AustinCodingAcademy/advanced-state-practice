import React, { Component } from "react";
import Reviews from "./Reviews";

// function ProductDetail(props) {
//   const { name, description, rating, imgUrl, reviews } = props.product;
  
//   const stars = [];
//   const emptyStars = [];
//   for (let i = 0; i < rating; i++) {
//     stars.push(<span key={i} className="glyphicon glyphicon-star" />);
//   }
//   for (let j = 0; j < 5 - rating; j++) {
//     emptyStars.push(<span key={j + 10} className="glyphicon glyphicon-star-empty" />);
//   }

//   let reviewText = (reviews.length > 1) ? `${reviews.length} reviews` : `${reviews.length} review`; 

//   return (
//     <div className="col-sm-4 col-lg-4 col-md-4">
//       <div className="thumbnail">
//         <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
//         <div className="caption">
//           <h4>
//             <a href="#" onClick={(e) => {
//               this.setState({
//                 visible: !this.state.visible
//               });
//             }}>{name}</a>
//           </h4>
//           <p>{description} 
//           </p>
//         </div>
//         <div className="ratings">
//           <p className="pull-right"><a href="#">{reviewText}</a></p>
//           <p className="pull-left">{stars}{emptyStars}</p>
//         </div>
//         <Reviews product={props.product} />
//       </div>
//     </div>
//   );
// }
// export default ProductDetail;


class ProductDetail extends Component {

  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { name, description, rating, imgUrl, reviews } = this.props.product;
    
    const stars = [];
    const emptyStars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="glyphicon glyphicon-star" />);
    }
    for (let j = 0; j < 5 - rating; j++) {
      emptyStars.push(<span key={j + 10} className="glyphicon glyphicon-star-empty" />);
    }

    let reviewText = (reviews.length > 1) ? `${reviews.length} reviews` : `${reviews.length} review`; 
      return (
        <div className="col-sm-4 col-lg-4 col-md-4">
          <div className="thumbnail">
            <img style={{width: "320px",height: "150px"}} src={imgUrl} alt="" />
            <div className="caption">
              <h4>
                <a href="#">{name}</a>
              </h4>
              <p>{description} 
              </p>
            </div>
            <div className="ratings">
              <p className="pull-right"><a href="#" onClick={this.handleClick}>{reviewText}</a></p>
              <p className="pull-left">{stars}{emptyStars}</p>
            </div>
            <Reviews product={this.props.product} visible={this.state.visible}/>
          </div>
        </div>
      );
  }
}

export default ProductDetail;
