// how to create a nested element
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
    "div",
    {id:"childDiv",className:"childDiv"},
    React.createElement(
        "h1",
        {id:"heading",className:"Heading"},
        "Hello world from React!"
      )
     )
    )
// for above structure looks like 
// <div>
//     <div>
//         <h1> "Hello world from React!"</h1>
//     </div>
// </div>

// How to add siblings? in that arg add array

const parent2 = React.createElement(   
    "div",
    {id:"Parent"},
    [
        React.createElement("h1",{}, "Hello world from React!"),
        React.createElement("h2",{},"Hello world from React Sibling!")
    ]);

// for above structure looks like 
// <div>
//     <div>
//         <h1> "Hello world from React!"</h1>
//         <h3> "Child"</h3>
//     </div>
// </div>


const heading = React.createElement(
    "h1",
    {id:"heading",className:"Heading"},
    "Hello world from React!"
);


console.log(heading); // heading is object 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
//root.render(parent);
root.render(parent2);

// explanation :
// when we createelement it creates  a react object on render it converts into Html and puts in the DOMException
// but this looks mess , JSX makes it easy