import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (text) => console.log(text);
  render() {
    const { firstBtn, secondBtn, thirdBtn } = this.props;
    return (
      <>
        <button onClick={() => this.handleClick(firstBtn)}>Red</button>
        <button onClick={() => this.handleClick(secondBtn)}>Green</button>
        <button onClick={() => this.handleClick(thirdBtn)}>Blue</button>
      </>
    );
  }
}

export default App;
