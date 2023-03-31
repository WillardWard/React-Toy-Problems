import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: [],
    };
  }

  solve = () => {
    const userString = this.state.userInput;
    const userArray = [...userString];
    let evens = [];
    let odds = [];

    userArray.forEach((element) => {
      if (!isNaN(element)) {
        if (parseInt(element, 10) % 2 === 0) {
          evens.push(element);
        } else {
          odds.push(element);
        }
      }
    });

    this.setState({ evenArray: evens, oddArray: odds });

    console.log(this.state.evenArray);
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.solve}>
          Sort the Numbers!
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
