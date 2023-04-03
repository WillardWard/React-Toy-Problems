import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  sumValues = () => {
    let total =
      parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10);
    this.setState({ sum: total });
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ number1: e.target.value })}
        ></input>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ number2: e.target.value })}
        ></input>
        <button className="confirmationButton" onClick={this.sumValues}>
          Calculate Sum
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
