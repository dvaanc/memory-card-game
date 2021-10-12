import React from 'react';
import reactDom from 'react-dom';
import list from './utility/list';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [cards, setCards] = React.useState(list);
  const [score, setScore] = React.useState(0);
  const [record, setRecord] = React.useState(0);
  function cardClicked(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Memory Card Game</h1>
      </header>
      <div className="body">
      <div className="cardContainer">
      {
        cards.map((item) => {
          const uuid = uuidv4();
        return (
          <div className="card" key={uuid} onClick={cardClicked}>
            <div className="imgContainer">
              <img src={item.src} alt="angular"/>
            </div>
            <p>{item.name}</p>
          </div>
          )
        })
      }
      </div>
      </div>
      <footer>
      Copyright © 2021. Web Design by Danny Cao.
      </footer>
    </div>
  );
}

export default App;
