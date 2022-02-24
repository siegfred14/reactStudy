//JSX
import React from 'react'

let Hello = () => {
   /*  return(
        <div className = 'dummyClass'>
            <h1>Hello Siegfred</h1>
        </div>
    ) */


    //to write the above code without using JSX
    //This method at minimum accepts 3 parameters
    // 1.) A string which specifies the html tag to be rendered
    // 2.) Any optional properties, eg {id: 'hello} (null if there's none)
    // 3.) The Children of the html element

    //return React.createElement('div', null, 'Hello siegfred')

    //to fix the above so the h1 tag shows, we use
    //return React.createElement('div', null, 'hello Siegfred')

    //to make the text h1, 
    //return React.createElement('div', null, '<h1>hello Siegfred<h1/>')
    //but the above will only display h1 beside the text

    //to render h1 as a h1 element,
    return React.createElement(
        'div', 
        {id: 'hello', className: 'DummyClass'}, //since class is a reserve keyword in JS, we use className in react
        React.createElement('h1', null, 'hello Siegfred'))
} 

export default Hello;