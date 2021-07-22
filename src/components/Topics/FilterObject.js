import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      cars: [
        {
          make: 'Toyota',
          model: '4Runner',
          year: 2005
        },
        {
          make: 'Toyota',
          model: 'Tacoma',
          year: 2005
        },
        {
          make: 'Chevrolet',
          model: 'Silverado 2500 HD'
        }
      ],

      userInput: '',
      filteredCars: []
    };
  };

  handleChange(value) {
    this.setState({userInput: value});
  };

  filterCars(prop) {
    let cars = this.state.cars;
    let filteredCars = [];

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].hasOwnProperty(prop)) {
        filteredCars.push(cars[i]);
      };
    };

    this.setState({filteredCars: filteredCars});
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Unfiltered: {JSON.stringify(this.state.cars, null, 10)} </span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => this.filterCars(this.state.userInput)}> Run Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredCars, null, 10)} </span>
      </div>
    )
  };
};
