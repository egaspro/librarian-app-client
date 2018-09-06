import React, { Component } from 'react';

class Home extends Component {

    takeBook = () => {
        this.props.takeBook();
        this.props.history.push('/recognition');
    }

    leaveBook = () => {
        this.props.leaveBook();
        this.props.history.push('/recognition');
    }

	render() {
		return (
			<div>
				<h1> What a Hell do you want ?!?!</h1>
				<br/>
                <button className="btn-blue" onClick={this.takeBook}>Take a book</button>
                <button className="btn-blue">Leave a book</button>
			</div>
		);
	}
};

export default Home;