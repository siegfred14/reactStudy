import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}

export default MemoComp;

// What pure components is to class components, memo is to functional components
