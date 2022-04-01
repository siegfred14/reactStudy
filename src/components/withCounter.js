// Higher Order Components HOC is a pattern where a function takes a component as an argument and returns another component
// const NewComponent = higherOrderComponent(originalComponent)
// eg const IronMan = withSuit(TonyStark)

import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
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
        <OriginalComponent
          name="Siegfred"
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
