import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isEven = this.isEven.bind(this);
    this.state = {
      firstCount: 0,
      secondCount: 0,
      thirdCount: 0,
    };
  }
  handleClick(which) {
    this.setState((prevState, _props) => {
      (prevState[which] % 2 === 0) ? console.log('blue') : console.log('green');
      return {[which]: prevState[which] + 1};
    });
  }
  isEven(which) {
    return (this.state[which] % 2 === 0) ? 'even' : 'odd';
  }
  render() {
    const { firstCount, secondCount, thirdCount } = this.state;
    return (
      <>
        <button className={this.isEven('firstCount')} onClick={() => this.handleClick('firstCount')}>{firstCount}</button>
        <button className={this.isEven('secondCount')} onClick={() => this.handleClick('secondCount')}>{secondCount}</button>
        <button className={this.isEven('thirdCount')} onClick={() => this.handleClick('thirdCount')}>{thirdCount}</button>
      </>
    );
  }
}

export default App;
