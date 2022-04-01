import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }

  // incrementCount = () => {
  //   this.setState((formerState) => {
  //     return { count: formerState.count + 1 };
  //   });
  // };

  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
