import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators as userActionCreators } from "redux/modules/user";
import { actionCreators as bookActionCreators } from "redux/modules/book";
import Leave from "./Leave";

const mapStateToProps = state => ({
  userId: state.user.userId,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  takenBooks: state.books.takenBooks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUser: userActionCreators.getUserReq,
      getTakenBooks: bookActionCreators.takenBooksReq,
      leaveBook: bookActionCreators.leaveBookReq
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leave);