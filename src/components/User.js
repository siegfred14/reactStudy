import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.render(true)}</h1>
      </div>
    );
  }
}

export default User;

// In React, it is possible to use a prop whose value is a function, to control what is actually rendered by a component
// The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.
