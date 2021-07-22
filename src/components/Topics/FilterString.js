import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
      strings: ['Carter', 'Cruiser', 'Toyota', '4Runner', 'Tundra', 'Mountains'],

      userInput: '',
      filteredStrings: []
    };
  };

  handleChange(val) {
    this.setState({ userInput: val });
  };

  filterEmployees(userInput) {
    let strings = this.state.strings;
    let filteredStrings = [];

    for (let i = 0; i < strings.length; i++) {
      if (strings[i].includes(userInput)) {
        filteredStrings.push(strings[i]);
      };
    };

    this.setState({filteredStrings: filteredStrings});
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.strings, null, 10)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}>Run Filter</button>
        <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredStrings, null, 10)}</span>
      </div>
    )
  };
};
