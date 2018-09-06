import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from 'redux/modules/user';
import Recognition from './Recognition';

const mapStateToProps = (state) => ({
	...state.user
	// isLoading: state.example.isLoading,
	// question: selectors.getQuestion(state),
	// task: task.selectors.getTask(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	countDownTime: actionCreators.countDownTime,
	validateUserReq: actionCreators.validateUserReq
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Recognition);