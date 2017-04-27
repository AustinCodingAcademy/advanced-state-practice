import React from "react";

class Reviews extends React.Component {
  constructor (props) {
    super();
    this.state ={
      visible:false,
    };

  }
render(){
  function fillStars(value){
    var arr=[];
    for (var i=0; i<value; i++){
      arr.push(<span className="glyphicon glyphicon-star"></span>)
    }
    return arr;
  };
  let reviewState = this.props.products;
  let reviewDiv="";
  let reviewTag;
  if(reviewState.length > 1) {
    reviewTag="Reviews";
  }
  else{
    reviewTag="Review"
  }


  if(this.state.visible){
    reviewDiv=reviewState.map(function(type, index){
      return(
      <div>

<hr />
        <p  key={index}>{type.description}</p><p>{fillStars(type.rating)} </p>

      </div>
);
    })
  }
  else{
    reviewDiv="";
  }

  return(
    <div>
    <a onClick={(e)=>{
      this.setState({
        visible:!this.state.visible
      });
    }}>{reviewTag}</a>
{reviewDiv}

    </div>
  );

}
}


export default Reviews;
