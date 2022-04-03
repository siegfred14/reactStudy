import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
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
        <h2 onMouseOver={incrementCount}>
          {" "}
          {/* {this.props.name}  */}
          Hovered {count} times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 5);
