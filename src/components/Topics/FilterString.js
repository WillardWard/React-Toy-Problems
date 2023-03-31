import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "big little",
        "medium little",
        "littlest",
        "big boy",
        "little boy",
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  findString = (prop) => {
    let origArray = this.state.unFilteredArray;
    let newArray = [];

    origArray.forEach((element) => {
      if (element.includes(prop)) {
        newArray.push(element);
      }
    });

    this.setState({ filteredArray: newArray });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.findString(this.state.userInput)}
        >
          Execute!
        </button>
        <span className="resultsBox filterStringPB">
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
