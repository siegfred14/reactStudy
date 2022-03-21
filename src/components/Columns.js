import React from "react";

function Columns() {
  const items = [];
  return (
    // <React.Fragment>
    //   {items.map((item) => (
    //     <React.Fragment key={item.id}>
    //       <h1>Title</h1>
    //       <p>{item.title}</p>
    //     </React.Fragment>
    //   ))}
    //   <td>Name</td>
    //   <td>Siegfred</td>
    // </React.Fragment>
    <>
      <td>Name</td>
      <td>Siegfred</td>
    </>
  );
}

export default Columns;

// NOTES
// Fragments can accept the key attribute when rendering a list of items
// Key attribute is the only attribute that can be parsed to a React Fragment for now
// React Fragments can also be rendered using an empty opening tag and an empty closing tag
