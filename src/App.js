// import logo from "./logo.svg";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Joy from "./components/MyTest";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheet from "./components/Stylesheet";
// import Inline from "./inline";
// import "./appStyle.css";
// import styles from "./appStyles.module.css";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import Person from "./components/Person";
import React, { component } from "react";
import "./App.css";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table />
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet/> */}{" "}
      {/* if Greet is exported as a default component, we can import it with any name */}
      {/* <Welcome /> */}
      {/* <Joy/> */}
      {/* <Hello/> */}
      {/* <Person /> */}
      {/* <Greet name= "Bodam" heroName= "batman">
        <p>this is childrens props</p>
      </Greet>
      <Greet name= "Tunde" heroName= "Superman">
        <button>Samantha</button>
      </Greet>
      <Greet name= "Anietie" heroName= "Wonder Woman"/> */}
      {/* Using props with a class component */}
      {/* <Welcome name= "Bodam" heroName= "batman" />
      <Welcome name= "Tunde" heroName= "Superman" />
      <Welcome name= "Anietie" heroName= "Wonder Woman" /> */}
    </div>
  );
}

export default App;

// css applies to every child component. once imported in App.js
// css.modules however, because you reference the class name using the 'styles' variable, it cannot be access in the children component
