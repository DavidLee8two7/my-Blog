import React, { Component } from 'react';
import facePhoto from '../img/face-photo.jpeg';

class IntroPhoto extends Component {
	render() {
		return (
			<div className="profile">
				<img src={facePhoto} alt="David Lee's pic" className="profile__img" />
				<h1 className="profile__name heading-1">David Lee</h1>
			</div>
		);
	}
}

export default IntroPhoto;
