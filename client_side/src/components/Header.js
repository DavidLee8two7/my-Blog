import React, { Component } from 'react';
import bbc from '../img/logo-bbc.png';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<header>
					<h1 className="header--title heading-1">
						fullstack javaScript developer
					</h1>
				</header>
				<div className="header__contact header__contact-text">Contact me</div>
				<div className="header__contact-logos">
					<img src={bbc} alt="contact on logo 1" />
					<img src={bbc} alt="contact on logo 2" />
					<img src={bbc} alt="contact on logo 3" />
				</div>
			</div>
		);
	}
}

export default Header;
