import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './image_viewer';
import AboutMe from './components/navbar/aboutMe';
import Navbar from './components/navbar/navbar';
import Main1 from './components/main/main1';
import Main2 from './components/main/main2';
import Middle1 from './components/middle/middle1';
import Sidebar1 from './components/sidebar/sidebar1';
import Sidebar2 from './components/sidebar/sidebar2';
import Ending from './components/ending/ending';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AboutMe />
        <Navbar />
        <Main1 />
        <Main2 />
        <Sidebar2 />
        <Sidebar1 />
        <Middle1 />
        <Ending />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
