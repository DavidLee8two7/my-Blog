import React, { Component } from 'react';

class IntroPhoto extends Component {
	render() {
		return (
			<div className="introPhoto">
				<img
					src="../img/IntroPhoto.jpg"
					alt="David Lee's pic"
					className="IntroPhoto__img"
				/>
				<div className="Introduction">
					<h4 className="heading-4">David Lee</h4>
					<p>Frontend Developer</p>
				</div>
			</div>
		);
	}
}

export default IntroPhoto;
