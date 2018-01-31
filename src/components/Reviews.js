import React, { Component } from 'react';

class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {visible: "hidden-reviews"}
        this.exapndReviews = this.exapndReviews.bind(this);
    }

    format(reviews) {
        const plurality = reviews > 1 ? "reviews" : "review";
        return `${reviews} ${plurality}`;
    }

    exapndReviews() {
        const toggle = this.state.visible == "hidden-reviews" ? "visible-reviews" : "hidden-reviews";
        this.setState({visible: toggle});
    }

    render() {
        return(
            <div className="reviews">
                <p className="print" onClick={this.exapndReviews}>{this.format(this.props.product.reviews.length)}</p>

                <ul className={`list-group ${this.state.visible}`}>
                    {this.props.product.reviews.map( function(review, i){
                        return <li key={i} className="list-group-item">{review.description}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Reviews;