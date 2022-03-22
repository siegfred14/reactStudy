import React, { Component } from "react";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Siegfred",
    };
  }

  render() {
    return (
      <div>
        <h2>ParentComp</h2>
      </div>
    );
  }
}

export default ParentComp;
