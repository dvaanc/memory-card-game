import React from 'react';
import reactDom from 'react-dom';
import './App.css';

function App() {
  const [cards, setCards] = React.useState({
    list: [

    ],
  });

  return (
    <div className="App">
      <header className="header">
        <h1>Memory Card Game</h1>
      </header>
      <div className="body">
        <div className="card">
        <img/>
        <p>Test</p>
        </div>
      </div>
      <footer>
      Copyright © 2021. Web Design by Danny Cao.
      </footer>
    </div>
  );
}

export default App;
