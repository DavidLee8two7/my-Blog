import React, { Component } from 'react';
import SVGIcon from './SVGIcon';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__title">
					<h1 className="header__title--name heading-1">
						<span>D</span>avid<br />lee
					</h1>
					<blockquote className="header__title--quotation heading-3">
						<span>D</span>esign is not just what it looks like and feels like.<br />
						<span>D</span>esign is how it works. - Steve Jobs
					</blockquote>
				</div>
				<div className="header__contact">
					<div className="header__contact--text heading-4">
						<p>Please talk to me</p>
					</div>
					<div className="header__contact--logos">
						<a href="#" className="header__contact--logo" id="github">
							<SVGIcon name="github" />
						</a>
						<a href="#" className="header__contact--logo" id="linkedin">
							<SVGIcon name="linkedin" />
						</a>
						<a href="#" className="header__contact--logo" id="gmail">
							<SVGIcon name="gmail" />
						</a>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
