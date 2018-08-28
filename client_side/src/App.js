import React, { Component } from 'react';

import './App.scss';

import Sidebar from '../src/components/Sidebar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
			</div>
		);
	}
}

export default App;
