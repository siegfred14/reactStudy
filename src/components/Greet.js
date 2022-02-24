import React from 'react'

/* function Greet() {
    return <h1>Hello Siegfred</h1>
} */

//Using ES6
/* let Greet = () => <h1>Hello Siegfred</h1>

export default Greet */

//we can also use the named export
/* export let Greet = () => <h1>Hello Siegfred</h1> */
 
//in this situation, you have to import the component with the exact same name
//import { Greet } in App.js

//so we have two types of export
//default export and 
//named export

//To greet more than one person
let Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} A.K.A {props.heroName}</h1>
            {props.children}
        </div> // you can have only one element in a class. if you need to use more, enclose them in a div
    )
}

export default Greet

//Notes
//  For the properties you know for sure are going to be passed, you can pass them as attributes
/*  If you have no clue what is going to be passed as props, or you have to pass in dynamic html content, pass it inbetween the component tags and in the component definition simply render the content using props.children.
    If at all something is specified, it is rendered in the browser
    If nothing is passed, props.children simply renders nothing
 */
