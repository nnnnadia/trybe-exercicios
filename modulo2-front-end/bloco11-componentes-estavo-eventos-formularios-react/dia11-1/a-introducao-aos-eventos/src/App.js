import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRedClick = this.handleRedClick.bind(this);
    this.handleGreenClick = this.handleGreenClick.bind(this);
    this.handleBlueClick = this.handleBlueClick.bind(this);
  }
  handleRedClick = () => console.log(this);
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
