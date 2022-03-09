import React from "react";
import Person from "./Person";

function NameList() {
  let names = ["Bruce", "Clark", "Diana"];
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
  //   const personList = persons.map((person) => (
  //     // <h2>
  //     //   Je m'appelle {person.name}, J'ai {person.age} ans et j'ai competence en{" "}
  //     //   {person.skill}
  //     // </h2>
  //     <Person key={person.id} person={person} />
  //   ));

  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;

// Notes about keys
// Key prop cannot be a prop in the child component
// Keys help react identify which item in the list has changed, has been added or removed.
//  It plays a crucial role in handling UIs efficiently
// using index as a key can cause UI issues however

// When to use Index as key in a list
// The items in your list do nothave a unique id
// the list is a static list and will not change
// The list will never be reordered or filtered

// these 3 must be satisfied for an index to be used as key
// else, use one of the npm packages for generating unique keys or hash out a unique property from one of the existing properties
