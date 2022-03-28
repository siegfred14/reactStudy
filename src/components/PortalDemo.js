// React Portals provide a way to render children into a DOM Node that exists outside the DOM heirarchy, of the parent component

import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  //   return (
  //     <div>
  //       <h1>Portals Demo</h1>
  //     </div>
  //   );

  return ReactDOM.createPortal(
    <div>
      <h1>Portals Demo</h1>
    </div>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;

// The first parameter that the ReactDOM can take can be any element that react can render. it could be number, string, JSX or even component.

// One of the use cases of portals is having to deal with a parent component CSS, when the child component is a modal, a pop-up, or a tool tip
