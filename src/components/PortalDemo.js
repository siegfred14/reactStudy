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
