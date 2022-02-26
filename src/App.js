import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Joy from './components/MyTest'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet/> */} {/* if Greet is exported as a default component, we can import it with any name */}
      {/* <Welcome />
      <Joy/> */}
      {/* <Hello/> */}
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
