import React, { Component } from "react";

class Take extends Component {
  state = {
    success: false,
    selectedBook: null
  };

  componentDidMount() {
	this.props.getUser(this.props.userId);
    this.props.getBooks(this.props.userId);
  }

  componentDidUpdate(){
    if (this.props.bookIsTaken){
      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
    }
  }

  changeHandler = e => {
    
    const { value } = e.target;
    console.log(value);
    this.setState({ selectedBook: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { selectedBook } = this.state;
    console.log('aaa')
    if (selectedBook) {
      
      this.props.takeBook({
        userId: this.props.userId,
        bookId: selectedBook,
      });
    }
  };

  render() {    
	const { success } = this.state;
	const { books, firstName, lastName } = this.props;
	const userBooksCount = books.filter(book => book.userId == this.props.userId).length;

    return (
      <div>
		{ userBooksCount === 0 &&
			<img src="./Welcome.jpeg" width="200" height="200" />
		}
		{ userBooksCount > 0 &&
		<img src="./YouHaveBooks.jpeg" width="200" height="200" />
		}
		{ userBooksCount === 0 &&
        <h1> Welcome {firstName} {lastName} </h1>
		}
		{ userBooksCount > 0 &&
			<h1> {firstName} {lastName}, you have {userBooksCount} unreturned books !! </h1>
		}
        <h2> Please select book(s) to take </h2>
        <form action="" onSubmit={this.submitHandler}>
          <select
            id="select"
            style={selectStyles}
            onChange={this.changeHandler}
          >
		  	<option key={-1} value="" disabled="true" selected="true">Please select a book</option>
		  {
			books && books.map((book, index) =>
        <option value={book.bookId} disabled={book.userId !== null} key={index}>
          {book.title} {book.userId !== null? ` (${book.firstName} ${book.lastName})` : ''}</option>
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

export default Take;

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
