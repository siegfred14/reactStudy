import React from "react";
import Person from "./Person";

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
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;

  // Using Array of objects
  const persons = [
    {
      id: 1,
      name: "Bruce",
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      skill: "Vue",
    },
  ];
  const personList = persons.map((person) => (
    // <h2>
    //   Je m'appelle {person.name}, J'ai {person.age} ans et j'ai competence en{" "}
    //   {person.skill}
    // </h2>
    <Person person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
