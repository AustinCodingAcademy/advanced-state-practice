import React from "react";

class Reviews extends React.Component {
  constructor(props) {
    super();
    this.state = {
      submit: false,
    };

  }
  render() {
    function Stars(value) {
      const arr = [];
      for (let i = 0; i < value; i++) {
        arr.push(<span className="glyphicon glyphicon-star"></span>)
      }
      return arr;
    }
    const stateOfReview = this.props.products;
    let divReview = "";
    let displayTag;

    if (stateOfReview.length > 1) { displayTag = "Reviews" }
    else { displayTag = "Review"; }

    if (this.state.submit) {
      divReview = stateOfReview.map(function (type, index) {
        return (
          <div>
            <hr />
            <p key={index}>{type.description}</p><p>{Stars(type.rating)}</p>
          </div>
        );
      });
    }
    else {
      divReview = "";
    }
    return (
      <div>
        <a onCLick={() => {
          this.setState({
            submit: !this.state.submit});
        }}>{displayTag}</a>
        {divReview}

      </div>
    );
  }
}



export default Reviews;
