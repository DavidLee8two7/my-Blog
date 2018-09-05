import React, { Component } from 'react';
import facePhoto from '../img/face-photo.jpeg';

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<img src={facePhoto} alt="David Lee's pic" className="profile__img" />
				<div>
					<h2 className="profile__name heading-2">David Lee</h2>
					<p className="profile__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
						nulla quo, suscipit, nisi praesentium eum sit. Asperiores qui quasi
						architecto ullam nisi commodi, ratione ea quam, vero deserunt
						laudantium praesentium.
					</p>
				</div>
			</div>
		);
	}
}

export default Profile;
