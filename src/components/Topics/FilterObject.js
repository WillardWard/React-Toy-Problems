import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          army: "Stormcast Eternals",
          points: 1990,
          painted: true,
        },
        {
          army: "Soulblight Gravelords",
          grandAlliance: "Death",
          player: "Doug Savage",
        },
        {
          army: "Skaven",
          paintingScore: 8,
          player: "Bruce Bappo",
        },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  filterArmy = (prop) => {
    let objectArray = this.state.unFilteredArray;
    let filteredArray = [];

    objectArray.forEach((element) => {
      if (element.hasOwnProperty(prop)) {
        filteredArray.push(element);
      }
    });

    this.setState({ filteredArray: filteredArray });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filterArmy(this.state.userInput)}
        ></button>
        <span className="resultsBox filterObjectPB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
