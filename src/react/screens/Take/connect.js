import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actionCreators as userActionCreators } from "redux/modules/user";
import { actionCreators as bookActionCreators } from "redux/modules/book";
import Take from "./Take";

const mapStateToProps = state => ({
  // isLoading: state.example.isLoading,
  // question: selectors.getQuestion(state),
  // task: task.selectors.getTask(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getBooks: bookActionCreators.allBooksReq
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Take);
