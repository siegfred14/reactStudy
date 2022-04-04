import React, { Component } from "react";

class ClickCounterTwo extends Component {
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
    const { count } = this.state;
    return <div>Clicked {count} Times</div>;
  }
}

export default ClickCounterTwo;
