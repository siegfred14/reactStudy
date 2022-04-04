import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name()}</h1>
      </div>
    );
  }
}

export default User;
