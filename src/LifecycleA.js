import React, { Component } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Siegfred",
    };
    console.log("LifecycleA constructor");
  }

  render() {
    console.log("LifecycleA render");
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
