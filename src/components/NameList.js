import React from "react";

function NameList() {
  //   let names = ["Bruce", "Clark", "Diana"];
  //   return (
  //     <div>
  //       {/* <h2>{names[0]}</h2>
  //       <h2>{names[1]}</h2>
  //       <h2>{names[2]}</h2> */}

  //       {/* Using the mapping function */}
  //       {/* {names.map((name) => (
  //         <h2>{name}</h2>
  //       ))} */}
  //     </div>
  //   );

  //   Using the variables
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
