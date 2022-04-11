import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      firstCount: 0,
      secondCount: 0,
      thirdCount: 0,
    };
  }
  handleClick = (which) => {
    this.setState((prevState, _props) => ({
      [which]: prevState[which] + 1,
    }));
  }
  render() {
    const { firstCount, secondCount, thirdCount } = this.state;
    return (
      <>
        <button onClick={() => this.handleClick('firstCount')}>{firstCount}</button>
        <button onClick={() => this.handleClick('secondCount')}>{secondCount}</button>
        <button onClick={() => this.handleClick('thirdCount')}>{thirdCount}</button>
      </>
    );
  }
}

export default App;
