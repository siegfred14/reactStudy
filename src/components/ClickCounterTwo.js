import React, { Component } from "react";

class ClickCounterTwo extends Component {
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
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}> Clicked {count} Times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
