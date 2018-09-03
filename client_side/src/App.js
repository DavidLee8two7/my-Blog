import React, { Component } from 'react';

import './App.scss';

import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import IntroPhoto from '../src/components/IntroPhoto';
import Slider from '../src/components/Slider';
import AboutMe from '../src/components/AboutMe';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<Header />
				<IntroPhoto />
				<AboutMe />
				<Slider />
			</div>
		);
	}
}

export default App;
