import React, { Component } from 'react';

import './App.scss';

import Header from '../src/components/header/Header';
import Intro from '../src/components/header/Intro';
import Gallery from '../src/components/header/Gallery';

import About from '../src/components/main/About';
import Skills from '../src/components/main/Skills';

class App extends Component {
	render() {
		return (
			<div className="App start-line">
				<Header />
				<Intro />
				<Gallery />
				<About />
				<Skills />
			</div>
		);
	}
}

export default App;
