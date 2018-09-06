import React, { Component } from 'react';

class Leave extends Component {
	componentWillMount() {
		//this.props.getExampleReq();
		//this.props.getTaskReq();
	}

	render() {
		//const { what, from, to, floor } = this.props.task.data;

		return (
			<div>
				<h1> Welcome Petras Blieka </h1>
				<h2> Please select book(s) to leave </h2>
                <div>Content to do</div>
				{/* <p>
					<span> P.S. Here is your requested question: </span>
					{	this.props.isLoading || this.props.task.isLoading
						? 'Loading'
						: this.props.question && this.props.question.title}
				</p>
				<p>
					<span>order {what} from {from} to be delivered to {to} floor {floor}</span>
				</p> */}
			</div>
		);
	}
};

export default Leave;