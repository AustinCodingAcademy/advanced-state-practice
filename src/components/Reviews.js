import React from "react";

class Reviews extends React.Component {
    constructor() {
        super();
        this.state = {visible:true};
    }
    render(props) {
        var reviewDiv = "";
        if(this.state.visible) {
            reviewDiv = this.props.reviews.map((review) => {
                return <div>
                       {review.description}
                    </div>
            })
        }


        return <div>
                <button onClick={()=>{
                    this.setState({
                        visible:!this.state.visible
                    });
                    }
                }>Review</button>
                {reviewDiv}
            </div>
    }

        
        


};

export default Reviews;