import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.react'
import Footer from './footer/footer.react'
import AppMain from './AppMain/AppMain.react';

class App extends Component {
  footerInfo = {
    designer: "Verizon",
    copyRight: "2019-2022"
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header majorHeading="Radio Taxi" />

        </header>
        <section>
          <AppMain />
        </section>
        <footer>
          <Footer info={this.footerInfo}></Footer>
        </footer>
      </div>
    );
  }
}

export default App;
