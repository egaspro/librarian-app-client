import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators as userActionCreators } from "redux/modules/user";
import { actionCreators as bookActionCreators } from "redux/modules/book";
import Take from "./Take";

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  books: state.books.allBooks,
  bookIsTaken: state.books.bookIsTaken
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getUser: userActionCreators.getUserReq,
      getBooks: bookActionCreators.allBooksReq,
      takeBook: bookActionCreators.takeBookReq
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Take);
