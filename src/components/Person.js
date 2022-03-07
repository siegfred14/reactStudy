import React from "react";

function Person() {
  return (
    <div>
      <h2>
        Je m'appelle {person.name}, J'ai {person.age} ans et j'ai competence en{" "}
        {person.skill}
      </h2>
    </div>
  );
}

export default Person;
