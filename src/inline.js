import React from "react";

// In react, inline styles are not specified as a string
// instead they are specified with an object whose key is the camel case version
// of the styling, and the value is usually a string

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
