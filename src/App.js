import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Carousel from './Carousel';
import Cards from './Cards';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar />
        <div className="Landing-container">
          <Jumbotron />
          <Cards />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
