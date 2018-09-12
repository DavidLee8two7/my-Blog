import React from 'react';

const Gallery = () => (
	<div className="frame">
		<section className="gallery">
			<figure className="gallery__item gallery__item--front">
				<img
					src="img/with-wife.jpeg"
					alt="with wife"
					className="gallery__img--front"
				/>
			</figure>
			<figure className="gallery__item gallery__item--back">
				<img
					src="img/laughing.jpeg"
					alt="myPic-1"
					className="gallery__img--back"
				/>
				<blockquote className="gallery__text--back">
					<div className="gallery__text--quote">
						<p className="quote">
							Design is not just what it looks like and feels like.
							<br />
							Design is how it works. - Steve Jobs
						</p>
					</div>
					<div className="gallery__text--quote">
						<p className="quote">
							We find only the world we look for.<br />
							- Henry David Thoreau
						</p>
					</div>
				</blockquote>
			</figure>
		</section>
	</div>
);

export default Gallery;
