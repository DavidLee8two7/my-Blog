import React, { Component } from 'react';
import './App.scss';

import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import Profile from '../src/components/Profile';
import Skills from '../src/components/Skills';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<Header />
				<Profile />
				<Skills />
			</div>
		);
	}
}

export default App;
