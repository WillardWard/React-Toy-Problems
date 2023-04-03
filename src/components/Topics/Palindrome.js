import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  isPalendrome = (prop) => {
    let userString = prop.toLowerCase().replace(/\s+/g, "");
    let halfLength = userString.length / 2;
    let checkPalindrome = true;

    if (halfLength % 2 !== 0) {
      halfLength = Math.floor(halfLength);
    }

    for (let i = 0; i < halfLength; i++) {
      if (
        userString.charAt(i) !== userString.charAt(userString.length - 1 - i)
      ) {
        checkPalindrome = false;
      }
    }

    checkPalindrome
      ? this.setState({ palindrome: "You have a palindrome!" })
      : this.setState({ palindrome: "This is not a palindrome!" });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.isPalendrome(this.state.userInput)}
        >
          Check Palindrome
        </button>
        <span className="resultsBox">Results: {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
