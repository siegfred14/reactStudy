import React, { Component } from "react";

// To convert the form from a regular html to a react component we must
// 1. Create a contolled state that will control the value of the element
// 2. Handling the unchanged event

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleUsernamechange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernamechange}
          />
        </div>
        <div>
            <label>Comments<label/>
            <textarea><textarea/>
        <div/>
      </form>
    );
  }
}

export default Form;
