import React, { Component } from "react";

// methods in mounting
class LifecycleB extends Component {
  // method 1: constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "Siegfred",
    };
    console.log("LifecycleB constructor");
  }

  // method 2: getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
  }

  // method 3: componentDidMount
  componentDidMount() {
    console.log("LifecycleB ComponentDidMount");
  }

  // method 4: render method
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
