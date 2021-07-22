// Everything in this file is a component
import React, { Component } from 'react';
// import { render } from 'react-dom';

//Class based component:
export default class EvenAndOdd extends React.Component {
    //this is a contructor function:
    constructor () {
        super() 
        // variables go here
        this.state = {
            evernArray: [],
            oddArray: [],
            userInput: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    //functions go here
    handleInput(value) {
        //what is e grabbing? console.log(e.target.value)
        this.setState({ userInput: value });
        // console.log(this.state.userInput);
    }

    splitEvenAndOdds(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10));
            } else {
                odds.push(parseInt(arr[i], 10));
            };
        };
        this.setState({evernArray: evens, oddArray: odds});
    };

    //render goes here with return inside
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={e => this.handleInput(e.target.value)} className="inputLine"></input>
                <button onClick={() => {this.splitEvenAndOdds(this.state.userInput)}} className="confirmationButton">Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evernArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    };
};



//functional based component: (old way of doing things)

// function evenAndOdd() {
//     //variables go here
//     //functions go here
//     render() {
//         return(
//             //components go here
//         )
//     }
// }

// What's the difference between a functional component and a class component?