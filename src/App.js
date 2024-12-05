//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
   //<h1 > hellow world</h1>
   
 // );
//}

//export default App;
import React from 'react';
import './App.css';
import { DefaultButton } from '@fluentui/react';

function App() {
  return (
    <div className="container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div><DefaultButton text="Click me" onClick={() => alert('Default Button Clicked!')} />
      </div>
      <div className="content">
        <div className="left-panel">
          <p>Content on the left</p>
        </div>
        <div className="right-panel">
          <p>Content on the right</p>
        </div>
      </div>
    </div>
  );
}

export default App;
