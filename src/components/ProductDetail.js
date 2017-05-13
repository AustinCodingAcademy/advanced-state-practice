import React, {Component} from "react";
import PropTypes from "prop-types";
import Review from "./Review";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReview: false
    };
  }

  showStars() {
    const stars = [];
    for (let i = 0; i < this.props.product.rating; i++) {
      stars.push(<span className="glyphicon glyphicon-star" />);
    }
    return stars;
  }

  toggleReview() {
    this.setState({
      showReview: !this.state.showReview
    });
  }
//  const {name,description,rating,imgUrl} = props.product;
  render() {
    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img style={{width: "320px",height: "150px"}} src={this.props.product.imgUrl} alt="" />
          <div className="caption">
            <h4><a href="#">{this.props.product.name}</a>
            </h4>
            <p>{this.props.product.description}
            </p>
          </div>
          <div className="ratings">

            <Review
              numReview={this.numberOfReviews}
              showReview={this.state.showReview}
              toggleReview={() => {
                this.toggleReview();
              }}
              product={this.props.product} />
            <p>
              {this.showStars()}
            </p>
          </div>
        </div>
      </div>
    );
  } // end of return
} // end of render

ProductDetail.propTypes = {
  product: PropTypes.object
};

export default ProductDetail;
