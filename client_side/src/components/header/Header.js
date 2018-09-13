import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<nav className="navbar">
					<a className="navbar__logo--frame" href="/">
						<span className="navbar__logo--text heading-4">DL</span>
					</a>
					<ul className="navbar__features">
						<li className="navbar__feature">
							<a className="navbar__feature--item" href="/">
								Home
							</a>
						</li>
						<li className="navbar__feature">
							<a className="navbar__feature--item" href="/project-list.html">
								Projects
							</a>
						</li>
						<li className="navbar__feature">
							<a className="navbar__feature--item" href="/blog.html">
								Blog
							</a>
						</li>
						<li className="navbar__feature">
							<a className="navbar__feature--item" href="">
								Resume
							</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
