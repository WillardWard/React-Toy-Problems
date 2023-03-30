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
    userArray.forEach((element) => {
      if (Number.isInteger(element)) {
        element % 2 === 0
          ? this.state.evenArray.value.push(element)
          : this.state.oddArray.value.push(element);
      }
    });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(event) => this.setState({ userInput: event.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.solve}></button>
        <span className="resultsBox">{this.evenArray}</span>
        <span className="resultsBox"></span>
      </div>
    );
  }
}

export default EvenAndOdd;
