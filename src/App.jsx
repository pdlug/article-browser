import React, { Component } from 'react';
import './app.css';

import Header from './components/layout/Header';

import Article from './components/Article';

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="p-8 bg-whitesmoke">
          <Article />
          <Article />
          <Article />
        </div>
      </>
    );
  }
}

export default App;
