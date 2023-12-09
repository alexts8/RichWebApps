
**Q1**
In ReactJS a prop is the data being passed into a react component, similar to HTML attributes or JS function arguments. In this example, from the note taker app, the component NoteTaker receives a prop user with the value Alex.
```jsx
 ReactDOM.render(<NoteTaker user=“Alex"  />,  document.getElementById('root’));
 ```

In ReactJS, "state" refers to the state of a component, i.e. its data and variables. React is concerned with state management, and rendering the current state of a component to the DOM, and re rendering that component when a change in state is detected.
Hooks allow  functions to access states -  see code example below:
```jsx
import { useState } from "react";

function viewNumber() {
  const [number, setNumber] = useState(1);
  return (
    <>
	<h1>The number is {number}!</h1>
      <button
        type="button"
        onClick={() => setNumber(2)}>"Set Number to 2"</button>
    </>
  )
}
```
In this code, a hook allows the function viewNumber to access the current state of the var "Number" and display the correct value


  

**Q2**
A functor is any data object that can be mapped over, i.e. can implement the map function, and can store data elements. A JavaScript array would be a functor, as it ca store data and be mapped:
```js
console.log([ 1, 2, 3 ].map(x => x + 1))  
// => [ 2, 3, 4]

```


  

**Q3**
Callbacks:
 -  Callbacks are the simplest and most readable of the methods. For simple, non-nested asynchronous requests, they are the easiest to implement.
 -  Callbacks become messy when asynchronous requests need to be made based on the response of  a previous one - they can become heavily nested and complicated.

Streams:
 - Streams allow instant access to data as it comes in, from the buffer - the client doesn't have to wait for an entire download of the incoming data.
 -  Streams are the most complicated and hardest to debug out of the 3, as they can be made up of several chained operations.

Promises:
 -  Promises can be chained to perform the functionality of a nested callback, but in a much more readable and easily debuggable way.
 -  Promises resolve with just one value so they aren't suitable for representing data over time like streams, and they are also more complex for single asynchronous tasks than callbacks. 

  

**Q4**
The CSS box model is a "box" that encapsulates every element in a HTML page, and dictates its position. It consists of content, padding, borders, and margin.
-   Content is just the content of the box, where text and images appear
-   Padding is an area around the content separating it from the box's border
-   The border surrounds the box itself
-   The margin is the space between the box's border and other elements
These elements can be manipulated to change the spacing and layout of any HTML element.
```css
div {   
border:  1px solid black;  
padding:  50px;  
margin:  20px;  
}
```
![](https://study.com/cimages/multimages/16/boxmodel.jpg)

  

**Q5**

 - Once a URL is accessed, the browser performs DNS resolution to find the server IP, and a TCP/IP connection is made.
 - A HTTP request is sent to the server by the browser over this connection, requesting the needed files.
 - The server parses this request and responds with requested files.
 - Initial assets like HTML, CSS and JS files are loaded.
 - From this, the browser can construct the DOM.
 - The initial DOM is rendered and presented to the user in the browser.
 - The browser can now wait and listen for any user interaction, and deal with it appropriately (JavaScript event handling, etc.)