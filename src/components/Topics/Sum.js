import React, { Component } from 'react';

export default class Sum extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  };

  handleChange(value) {
    this.setState({number1: value});
  };

  updateNum1(value) {
      this.setState({number1: parseInt(value, 10)});
  };
  updateNum2(value) {
      this.setState({number2: parseInt(value, 10)});
  };
  add(num1, num2) {
      this.setState({sum: num1 + num2});
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input placeholder="Enter Your First Number" className="inputLine" onChange={(e) => this.updateNum1(e.target.value)}/>
        <input placeholder="Enter Your Second Number" className="inputLine" onChange={(e) => this.updateNum2(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.add(this.state.number1, this.state.number2)}>Get Sum</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  };
};
