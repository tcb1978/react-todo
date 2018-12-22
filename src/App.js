import React, { Component } from 'react';
import Header from './Containers/Header/Header';
import Main from './Containers/Main/Main';
import Footer from './Containers/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
