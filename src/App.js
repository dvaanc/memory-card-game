import React from 'react';
import reactDom from 'react-dom';
import list from './utility/list';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [cards, setCards] = React.useState(list);
  const [score, setScore] = React.useState(0);
  const [record, setRecord] = React.useState(0);
  function handleCardClicked(e) {
    e.preventDefault();
    if(e.target.parentNode.parentNode.classList.contains('card')) {
      const parent = e.target.parentNode.parentNode;
      const id = parent.id;
      if(checkCardClicked(id)) {

      }
    } 
    if(e.target.parentNode.classList.contains('card')) {
      const parent = e.target.parentNode;
      const id = parent.id;
      checkCardClicked(id)

    }
    if(e.target.classList.contains('card')) {
      const parent = e.target;
      const id = parent.id;
      checkCardClicked(id)
    }
  }
  function checkCardClicked(id) {
    console.log(cards.some((item) => {
      return item.clicked && item.name === id;
    }))
  }
  function setCardClicked(id) {
    const card = cards.filter((item) => item.name === id)
    console.log(card)
    Promise.resolve()
    .then(() => {
      setCards({
        ...cards, 
        card
      })
    })
    .then(() => {
      console.log(cards)
    })
  }
  function resetGame() {

  }
  function shuffleCards() {
    
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Memory Card Game</h1>
      </header>
      <div className="body">
      <div className="score">
        <p>Score:</p>
        <p>Record:</p>
      </div>
      <div className="cardContainer">
      {
        cards.map((item) => {
          const uuid = uuidv4();
        return (
          <div className="card" key={uuid} id={item.name} onClick={handleCardClicked}>
            <div className="imgContainer">
              <img src={item.src} alt="angular" draggable="false"/>
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
