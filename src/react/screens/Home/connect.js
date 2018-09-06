import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from 'redux/modules/user';
import Home from './Home';

const mapStateToProps = (state) => ({
	// isLoading: state.example.isLoading,
	// question: selectors.getQuestion(state),
	// task: task.selectors.getTask(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	takeBook: actionCreators.takeBook,
	leaveBook: actionCreators.leaveBook
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);