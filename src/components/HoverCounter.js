import React, { Component } from "react";

export class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((formerState) => {
      return { count: formerState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hovered X times</h2>
      </div>
    );
  }
}

export default HoverCounter;
