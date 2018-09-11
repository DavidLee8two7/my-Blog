import React, { Component } from 'react';

import './App.scss';

import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import AboutMe from '../src/components/AboutMe';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Sidebar />
				<AboutMe />
			</div>
		);
	}
}

export default App;
