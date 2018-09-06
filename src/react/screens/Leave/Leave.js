import React, { Component } from "react";

class Leave extends Component {
  state = {
    success: false,
    selectedBook: null
  };

  componentWillMount() {
    //this.props.getExampleReq();
    //this.props.getTaskReq();
  }

  changeHandler = e => {
    const { value } = e.target;
    this.setState({ selectedBook: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { selectedBook } = this.state;

    if (selectedBook) {
      console.log(selectedBook);
      this.setState({ success: true }, () => {
        setTimeout(() => {
          this.props.history.push("/");
        }, 1000);
      });
    }
  };

  render() {
    //const { what, from, to, floor } = this.props.task.data;
    const { success } = this.state;

    return (
      <div>
        <h1> Welcome Petras Blieka </h1>
        <h2> Please select book(s) to leave </h2>
        <form action="" onSubmit={this.submitHandler}>
          <select
            id="select"
            style={selectStyles}
            onChange={this.changeHandler}
          >
            <option value="1">Some book title</option>
            <option value="2">Some book title</option>
            <option value="3">Some book title</option>
            <option value="4">Some book title</option>
            <option value="5">Some book title</option>
            <option value="6">Some book title</option>
            <option value="7">Some book title</option>
            <option value="8">Some book title</option>
            <option value="9">Some book title</option>
          </select>
          <button type="submit" className="btn-blue">
            submit
          </button>
        </form>
        <p
          style={
            success
              ? { ...successStyles, opacity: 1, transform: "translateX(0)" }
              : successStyles
          }
        >
          Success
        </p>
      </div>
    );
  }
}

export default Leave;

const selectStyles = {
  display: "block",
  width: "230px",
  margin: "40px auto",
  height: "40px",
  outline: "none"
};

const successStyles = {
  color: "#39ff14",
  fontSize: "24px",
  fontWeight: 700,
  transition: "ease .3s",
  opacity: 0,
  transform: "translateY(15px)"
};
