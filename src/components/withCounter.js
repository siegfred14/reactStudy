// Higher Order Components HOC is a pattern where a function takes a component as an argument and returns another component
// const NewComponent = higherOrderComponent(originalComponent)
// eg const IronMan = withSuit(TonyStark)

import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="Siegfred" />;
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
