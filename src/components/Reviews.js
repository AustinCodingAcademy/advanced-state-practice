import React from "react";
import state from "../state.js";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
       //this.state =  {visible:true};


  }
  render() {
    return <div>{this.props.reviews} </div>;
  }
}
export default Reviews;
