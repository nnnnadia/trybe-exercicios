import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleRedClick = () => console.log('red');
  handleGreenClick = () => console.log('green');
  handleBlueClick = () => console.log('blue');
  render() {
    return (
      <>
        <button onClick={this.handleRedClick}>Red</button>
        <button onClick={this.handleGreenClick}>Green</button>
        <button onClick={this.handleBlueClick}>Blue</button>
      </>
    );
  }
}

export default App;
