import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './image_viewer';
import Header1 from './component/header-1';

class App extends Component {
  render() {
    return (
      <div>
        <Header1 />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.header-1'));
