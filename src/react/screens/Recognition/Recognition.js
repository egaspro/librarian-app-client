import React, { Component } from 'react';
import Webcam from "react-webcam";

class Recognition extends Component {
	componentWillMount() {
		//this.props.getExampleReq();
		//this.props.getTaskReq();
    }

    componentDidMount() {
        this.props.countDownTime(5);
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.recognitionTimerDone) {
            this.props.validateUserReq(this.webcam.getScreenshot())
        }
        if (nextProps.isValidated) {
            if (nextProps.isLibraryCustomer) 
                this.props.history.push(this.props.isTakingBook? '/takeBook': '/leaveBook');
            else this.props.history.push('/notRecognized');
        }
    }

    setRef = webcam => {
        this.webcam = webcam;
      };
    
    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        console.log("imageSrc", imageSrc)
    };

	render() {
		//const { what, from, to, floor } = this.props.task.data;
        const videoConstraints = {
            width: 600,
            height: 1280,
            facingMode: "user"
        };
      
		return (
			<div>
				<h1> Who the hell are you ?!?!</h1>
				<br/>
                <h3>We will take your photo in: {this.props.recognitionTimerValue}</h3>
                <div>
                <Webcam         
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                    videoConstraints={videoConstraints}
                />
                {/* <button onClick={this.capture}>Capture photo</button> */}
                </div>
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

export default Recognition;