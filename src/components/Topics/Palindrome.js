import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  };

  handleChange(value) {
    this.setState({userInput: value});
  };

  filterEmployees(userInput) {
    let forward = userInput;
    let backward = userInput;

    backward = backward.split('');
    backward = backward.reverse();
    backward = backward.join('');

    if(forward === backward) {
        this.setState({palindrome: '- It\'s a Palindrome!'})
    } else {
        this.setState({palindrome: '- This is no Palindrome.'})
    }
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}>Try It.</button>
        <span className="resultsBox">Is it a Palindrome? {this.state.palindrome}</span>
      </div>
    )
  };
};
