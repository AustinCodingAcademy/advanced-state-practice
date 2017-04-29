/* import React from "react";
 testing code for ways to initiate the state*/

// this.state = is way to handle state with ES6 constructors

/* Code I use in reviews.js */

/* class Reviews extends React.Component {
  constructor(props) {
    super();
    this.state = {
      submit: false,
    };


   later I call the state with a return statement and use a div
  return (
    <div>
      <a onCLick={() => {
        this.setState({
          submit: !this.state.submit});
      }}>{displayTag}</a>
      {divReview}
      </div>
  }
}

tested code:

/* if you want use the state right away, better to set to variable*/

/* const submit = false;

this.state.submit = false;
this.forceUpdate(); update state right away

this.setState({submit: true});

  if(submit) {
    //code that will use submit
  }*/
