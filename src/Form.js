import React, { Component } from "react";

// To convert the form from a regular html to a react component we must
// 1. Create a contolled state that will control the value of the element

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <form>
        <label>Username</label>
        <input type="text" value={this.state.username} />
      </form>
    );
  }
}

export default Form;
