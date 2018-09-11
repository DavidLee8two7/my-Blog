import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
			<div className="aboutMe">
				<div className="aboutMe__bg-video">
					<video
						className="video-container video-container-overlay"
						autoPlay=" "
						loop=" "
					>
						<source type="video/mp4" src="img/traffic.mp4" />
						<source type="video/webm" src="img/video/traffic.webm" />
					</video>
				</div>
				<div className="aboutMe__intro">
					<h2 className="aboutMe__intro--title">My one word: </h2>
					<div className="aboutMe__intro--paragraph heading-4">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
							nulla quo, suscipit, nisi praesentium eum sit. Asperiores qui
							quasi architecto ullam nisi commodi, ratione ea quam, vero
							deserunt laudantium praesentium.
						</p>
						<br />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
							nulla quo, suscipit, nisi praesentium eum sit. Asperiores qui
							quasi architecto ullam nisi commodi, ratione ea quam, vero
							deserunt laudantium praesentium.
						</p>
						<br />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
							nulla quo, suscipit, nisi praesentium eum sit. Asperiores qui
							quasi architecto ullam nisi commodi, ratione ea quam, vero
							deserunt laudantium praesentium.
						</p>
					</div>
				</div>
				<figure className="aboutMe__photo">
					<img
						className="aboutMe__photo--profile"
						alt="David's face-pic"
						src="/img/profile-photo.jpeg"
					/>
					<figcaption className="aboutMe__photo--caption">Icon here</figcaption>
				</figure>
			</div>
		);
	}
}

export default AboutMe;
