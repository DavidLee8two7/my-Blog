import React, { Component } from 'react';
import facePhoto from '../img/face-photo.jpeg';

class IntroPhoto extends Component {
	render() {
		return (
			<div className="profile">
				<img src={facePhoto} alt="David Lee's pic" className="profile__img" />
			</div>
		);
	}
}

export default IntroPhoto;
