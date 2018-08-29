import React, { Component } from 'react';

import './App.scss';

import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import IntroPhoto from '../src/components/IntroPhoto';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<Header />
				<IntroPhoto />
			</div>
		);
	}
}

export default App;
