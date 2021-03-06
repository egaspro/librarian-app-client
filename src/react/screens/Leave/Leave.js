import React, { Component } from "react";

class Leave extends Component {
  state = {
    success: false,
    selectedBook: null
  };

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.props.getTakenBooks(this.props.userId);
  }

  componentDidUpdate(){
    if (this.props.bookIsLeft){
      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
    }
  }

  changeHandler = e => {
    const { value } = e.target;
    this.setState({ selectedBook: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { selectedBook } = this.state;

    if (selectedBook) {
      this.props.leaveBook({
        userId: this.props.userId,
        bookId: selectedBook,
      });
    }
  };

  render() {
    const { success } = this.state;
    const { takenBooks, firstName, lastName } = this.props;

    return (
      <div>
        <img src="./Welcome.jpeg" width="200" height="200" />
        <h1> Welcome {firstName} {lastName} </h1>
        <h2> Please select book(s) to leave </h2>
        <form action="" onSubmit={this.submitHandler}>
          <select
            id="select"
            style={selectStyles}
            onChange={this.changeHandler}
          >
            <option key={-1} value="" disabled="true" selected="true">Please select a book</option>
            {
              takenBooks && takenBooks.map((book, index) =>
                <option key={index} value={book.bookId}>{book.title} </option>
              )
            }
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
