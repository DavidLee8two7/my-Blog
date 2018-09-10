import React, { Component } from 'react';

import './App.scss';

import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';
import Profile from '../src/components/Profile';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Sidebar />
				<Profile />
			</div>
		);
	}
}

export default App;
