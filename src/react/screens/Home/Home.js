import React, { Component } from "react";

class Home extends Component {
  takeBook = () => {
    this.props.takeBook();
    this.props.history.push("/recognition");
  };

  leaveBook = () => {
    this.props.leaveBook();
    this.props.history.push("/recognition");
  };

  render() {
    return (
      <div>
        <img src="./WhatDoYouWant.jpeg" width="300" height="300" />
        <h1> What the Hell do you want ?!?!</h1>
        <br />
        <button className="btn-blue" onClick={this.takeBook}>
          Take a book
        </button>
        <button className="btn-blue" onClick={this.leaveBook}>
          Leave a book
        </button>
      </div>
    );
  }
}

export default Home;
