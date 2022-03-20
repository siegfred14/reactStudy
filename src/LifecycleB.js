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
    return null;
  }

  // Updating method 2: shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  // Updating method 4: getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
  }

  // Updating method 5: componentDidUpdate
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
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
