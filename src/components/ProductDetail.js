import React, {Component} from "react";
import Reviews from "./Reviews";
import PropTypes from "prop-types";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviews: false
    };
  }

  displayStars() {
    const stars = [];
    for (let i = 0; i < this.props.product.rating; i++) {
      stars.push(<span className="glyphicon glyphicon-star" />);
    }
    return stars;
  }

  toggleReviews() {
    this.setState({
      showReviews: !this.state.showReviews
    });
  }

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
            <Reviews
              showReviews={this.state.showReviews}
              toggleReviews={() => {
                this.toggleReviews();
              }}
              product={this.props.product} />
            <p>
              {this.displayStars()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
