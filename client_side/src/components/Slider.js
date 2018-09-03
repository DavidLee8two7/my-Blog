import React, { Component } from 'react';
import me1 from '../img/mountains-1280x640.png';
import me2 from '../img/santa-31665_1280.png';
import me3 from '../img/mountains-1280x640.png';
import me4 from '../img/santa-31665_1280.png';
import me5 from '../img/mountains-1280x640.png';

class Slider extends Component {
	render() {
		return (
			<div className="sliderContainer">
				<div id="content-slider">
					<div id="slider">
						<div id="mask">
							<ul>
								<li id="first" className="firstAnimation">
									<a href="#">
										<img src={me1} alt="Cougar" />
									</a>
									<div className="tooltip">
										<h1>Cougar</h1>
									</div>
								</li>

								<li id="second" className="secondAnimation">
									<a href="#">
										<img src={me2} alt="Lions" />
									</a>
									<div className="tooltip">
										<h1>Lions</h1>
									</div>
								</li>

								<li id="third" className="thirdAnimation">
									<a href="#">
										<img src={me3} alt="Snowalker" />
									</a>
									<div className="tooltip">
										<h1>Snowalker</h1>
									</div>
								</li>

								<li id="fourth" className="fourthAnimation">
									<a href="#">
										<img src={me4} alt="Howling" />
									</a>
									<div className="tooltip">
										<h1>Howling</h1>
									</div>
								</li>

								<li id="fifth" className="fifthAnimation">
									<a href="#">
										<img src={me5} alt="Sunbathing" />
									</a>
									<div className="tooltip">
										<h1>Sunbathing</h1>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slider;
