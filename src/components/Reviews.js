import React from 'react';

class Reviews extends React.Component{
    constructor(){
        super();
        this.state = {
            hidden: true
        }
    }
    //this component has a product sent in as prop

    toggleHide() {
        this.setState({hidden: !this.state.hidden});
    }
    render(){ 
        // console.log(this.props.product.reviews);
        let plural = "";
        if (this.props.product.reviews.length > 1) {
            plural = "s";
        }
        const reviewsDiv = this.props.product.reviews.map((review)=>{
                return (
                    <div>
                        <p>Description: {review.description}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                )
            }
        );
    return (    
        <div>
            <div className="pull-right" onClick={()=>{
                    this.toggleHide()
                }}>{this.props.product.reviews.length} review{plural}</div>
            
            {this.state.hidden ? <div /> : reviewsDiv }
        </div>
        )
    }
}
export default Reviews;