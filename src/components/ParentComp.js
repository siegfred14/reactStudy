import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Siegfred",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Siegfred",
      });
    }, 2000);
  }

  render() {
    console.log("**************Parent Component**************");
    return (
      <div>
        <h2>ParentComp</h2>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

// Differences btw Regular and Pure Components
// A Regular Component does not implement the shouldComponentUpdate method.It always returns 'true' by default
// A pure component on the other hand implements shouldComponentUpdate with a shalow props and state comparison.

// PURE COMPONENT
// A Pure component implements shouldComponentUpdate with a shallow prop and state comparison
// It does a shallow comparison of prevState with currentState
// and prevProps with currentProps
//  and only when the shallow comparison indicates there is a difference will the component rerender

// Because there is no change in the previous prop value and the current, the pure component does not re-render

// Pure components by preventing unnecesary re-render can give a performance boost in certain scenarios
// If the Parent component is a pure component, the child component will not re-render regardless
