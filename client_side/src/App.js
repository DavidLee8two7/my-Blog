import React, { Component } from 'react';

import './App.scss';

import Header from '../src/components/Header';
import Intro from '../src/components/Intro';
import Gallery from '../src/components/Gallery';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Intro />
				<Gallery />
			</div>
		);
	}
}

export default App;
