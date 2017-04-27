import React from "react";

class Reviews extends React.Component {
  constructor (props) {
    super();
    this.state ={
      visible:false;
    }

  }
render(){
  var reviewDiv="";
  var reviewTag;
  if(this.props.product.reviews > 1) {
    reviewTag="Reviews"
  }
  else{
    reviewTag="Review"
  }
  return reviewTag;
  }
  if(this.state.visible){
    reviewDiv=this.props.product.reviews.map(function(type, index){
      return
      <div>
        {type.description}
        <br/>
        {type.rating}
        <br/>
        <br/>


      </div>

    })
  }
  else{
    reviewDiv="";
  }
const {reviews} = props.product;
  return(

    <a onClick={(e)=>{
      this.setState({
        visible:!this.state.visible
      });
    }}{reviewDiv} </a>
  );

}

}

export default Reviews
