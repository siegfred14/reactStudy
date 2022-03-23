import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default React.memo(MemoComp);

// What pure components is to class components, memo is to functional components
// React.memo(MemoComp); is refered to as a higher order component
// React.memo accepts a component, adds some properties to the component and returns a new enhanced component
