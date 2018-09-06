import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userActionCreators } from "redux/modules/user";
import { bookActionCreators } from "redux/modules/book";
import Take from "./Take";

const mapStateToProps = state => ({
  // isLoading: state.example.isLoading,
  // question: selectors.getQuestion(state),
  // task: task.selectors.getTask(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBooks: bookActionCreators.allBooksReq
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Take);
