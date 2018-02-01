import React from "react";

class Stars extends React.Component {
    icons () {
        var rating = this.props.rating;
        var empties = 5 - this.props.rating;
        var icons = [];
        var i = 1;
        while (rating--) {
            icons.push(<span key={i} className="glyphicon glyphicon-star"></span>);
            i++;
        }
        while (empties--) {
            icons.push(<span key={i} className="glyphicon glyphicon-star-empty"></span>);
            i++;
        }
        return icons;
    }

    render () {
        return (
            <span>
                {this.icons()}
            </span>
        );
    }
}

export default Stars;