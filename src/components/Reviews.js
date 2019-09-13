import React, { Component } from 'react';
//props passed to class component via "this.props"
 class Reviews extends Component {
   state = {showing: false};

   render(){
     let firstReview;
     if (this.state.showing) {
        firstReview = <div>{this.props.numberOfReviews[0].description}</div>;
      } else {
        firstReview = <div></div>;
      }

     return(
       <div>
         <button onClick={
             ()=>{
             console.log("Showing?",this.state.showing);
             if (this.state.showing === false){
               let newShow = true;
               this.setState({showing: newShow});
             }else if (this.state.showing === true) {
               let newShow = false;
               this.setState({showing: newShow});
             }
             console.log("First Review:",this.props.numberOfReviews[0].description);
           }
         }>{this.props.numberOfReviews.length} Reviews</button>
         {firstReview}
       </div>
     )
   }
}

export default Reviews;
