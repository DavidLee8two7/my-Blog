import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './image_viewer';
import AboutMe from './components/navbar/aboutMe';
import Navbar from './components/navbar/navbar';
import Main1 from './components/main/main1';
import Main2 from './components/main/main2';

class App extends Component {
  render() {
    return (
      <div className="container">
        <AboutMe />
        <Navbar />
        <Main1 />
        <Main2 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
