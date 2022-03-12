// Methods of CSS styling
// 1. CSS Stylesheets
// 2. Inline styling
// 3. CSS Modules
// 4. CSS in JS Libraries

import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={className}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
