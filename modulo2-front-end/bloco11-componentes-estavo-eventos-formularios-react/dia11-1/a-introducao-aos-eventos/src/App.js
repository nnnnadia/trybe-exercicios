import React, { Component } from 'react';
import './App.css';

const handleRedClick = () => console.log('red');
const handleGreenClick = () => console.log('green');
const handleBlueClick = () => console.log('blue');

class App extends Component {
  render() {
    return (
      <>
        <button onClick={handleRedClick}>Red</button>
        <button onClick={handleGreenClick}>Green</button>
        <button onClick={handleBlueClick}>Blue</button>
      </>
    );
  }
}

export default App;
