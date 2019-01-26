import React, { Component } from 'react';
import './App.css';
import TopNav from './main/TopNav.js';
import SideNav from './main/SideNav.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <SideNav />
      </div>
    );
  }
}

export default App;
