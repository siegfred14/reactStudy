import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

// methods in mounting
class LifecycleA extends Component {
  // method 1: constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Siegfred",
    };
    console.log("LifecycleA constructor");
  }

  // method 2: getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
  }

  // method 3: componentDidMount
  componentDidMount() {
    console.log("LifecycleA ComponentDidMount");
  }

  // method 4: render method
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

// this runs in the manner 1,2,4,3
