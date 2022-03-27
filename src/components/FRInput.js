// REF FORWARDING
// - A technique of automatically passing a ref through a constructor to one of it's children

import React from "react";
import { forwardRef } from "react/cjs/react.production.min";

// function FRInput() {
//   return (
//     <div>
//       <input />
//     </div>
//   );
// }

// Using the forwardRef method from the react library

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

// When a component is passed as a parameter to the ref method, it receives it's ref attribute as a 2nd parameter
//  This ref parameter will point to the value of the ref attribute in the parent component

export default FRInput;
