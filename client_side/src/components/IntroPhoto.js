import React, { Component } from 'react';
import facePhoto from '../img/face-photo.jpeg';

class IntroPhoto extends Component {
	render() {
		return (
			<div className="introPhoto">
				<img
					src={facePhoto}
					alt="David Lee's pic"
					className="introPhoto__img"
				/>
				<p className="introPhoto__name heading-1">David Lee</p>
			</div>
		);
	}
}

export default IntroPhoto;
