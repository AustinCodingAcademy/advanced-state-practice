import React from "react";

class Reviews extends React.Component {
    constructor() {
        super();
    }
    render(props) {

        var reviewDiv = this.props.reviews.map((review) => {
            return <div>
                    <p>{review.description}</p>
                </div>
        })

        return <div>
                {reviewDiv}
            </div>
    }
        
        


};

export default Reviews;