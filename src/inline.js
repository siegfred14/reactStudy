import React from "react";

// In react, inline styles are not specified as a string
// instead they are specified with an object whose key is the camel case version
// of the styling, and the value is usually a string

function Inline() {
  return (
    <div>
      <h1>Inline</h1>
    </div>
  );
}

export default Inline;
