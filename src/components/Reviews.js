import React from "react";

class Reviews extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }
    render() {
        const reviews = this.props.product.reviews;
        console.log(reviews.length);

        let reviewName = "";
        if (reviews.length == 1 ){
            reviewName = "Review";
        }
        else{
            reviewName = "Reviews";
        }
        
        let reviewDivs = "";
        if (this.state.visible){
            reviewDivs = reviews.map(function (review,i){
                return <div key={i}>{review.description}</div>
            });

        }
        else{
            reviewDivs = "";
        }

        return (
            <div>
                <button onClick={
                    (e) => {
                        var state = {
                            visible : !this.state.visible
                        };
                        this.setState(state);
                    }
                }
                type="button">{reviews.length} {reviewName}</button>
                {reviewDivs}
            </div>
        );
    }
}
export default Reviews;