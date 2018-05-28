import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './image_viewer';
import AboutMe from './components/navbar/aboutMe';
import Navbar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AboutMe />
        <Navbar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.body'));
