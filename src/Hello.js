import React from 'react';
import './Hello.css';
// or => import React, { Component } from 'react';

// The simplest way to define a component is to write a JavaScript function:
// function Hello() {
//   return (
//     <h1 className="Hello">Hello World</h1>
//   );
// }
// This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

// You can also use an ES6 class to define a component:
class Hello extends React.Component {
  render() {
    return (
      <div className="tc">
        <h1 className="Hello">{this.props.greeting}</h1>
          <p>Welcome to React</p>
      </div>
    );
  };
}
// The above two components are equivalent from React’s point of view.

export default Hello;