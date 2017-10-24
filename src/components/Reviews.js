import React from 'react';
import ReactDOM from 'react-dom';

class Reviews extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleReviewsClick = (e) => {
    console.log("review clicked");
    console.log(e.target);
    this.setState({visible: !this.state.visible});
  }

  render(){
    console.log(this.props.reviewDivs);
    let displayReviewDivs = "";
    let displayReviewQuantity = `${this.props.reviewQuantity} Reviews`;

    if (this.props.reviewDivs.length < 2){
      displayReviewQuantity = `${this.props.reviewQuantity} Review`
    }

    if (!this.state.visible) {
      displayReviewDivs = <div></div>
    }
    else {
      displayReviewDivs = <div>{this.props.reviewDivs}</div>
    }
    return(
      <p className="pull-right">
        <span onClick={this.handleReviewsClick}>
          {displayReviewQuantity}
          {displayReviewDivs}
        </span>
      </p>

    );
  }
};

export default Reviews;
