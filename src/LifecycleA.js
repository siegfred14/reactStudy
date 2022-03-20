import { render } from "@testing-library/react";
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

  // Updating method 2: shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  // Updating method 4: getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  // Updating method 5: componentDidUpdate
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "SiegfredDOM",
    });
  };

  // method 4: render method
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;

// this runs in the manner 1,2,4,3

// Updating Lifecycle methods
// constructor(props)
// static getDerivedStateFromProps(props, state)
// shouldComponentUpdate(nextProps, nextState)
// render()
// getSnapshotBeforeUpdate(prevProps, prevState)
// componentDidUpdate(prevProps, prevState, snapshot)

// render and componentDidUpdate are the most used during lifecycle update

// Unmounting Phase
// Only method used is  componentWillUnmount()
//  method is invoked immediately before component is unmounted or destroyed
// cancelling any network requests, removing event handlers, cancelling any subscriptions and and also invalidating timers
// do not call the setState method because a component is never re-rendered after unmounted

// Error Handling Phase Methods
// static getDerivedStateFromError(error)
// componentDidCatch(error, info)
// Both are called when there is an error either during rendering in a lifecycle method or in the constructor of any child component
