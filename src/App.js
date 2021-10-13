import React from 'react';
import list from './utility/list';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [cards, setCards] = React.useState(list);
  const [score, setScore] = React.useState(0);
  const [record, setRecord] = React.useState(0);
  function handleCardClicked(e) {
    e.preventDefault();
    let parent;
    if(e.target.parentNode.parentNode.classList.contains('card')) parent = e.target.parentNode.parentNode;
    if(e.target.parentNode.classList.contains('card')) parent = e.target.parentNode;
    if(e.target.classList.contains('card')) parent = e.target;
    const id = parent.id;
    const index = parent.dataset.index;
    handleRound(id, index);
  }
  function handleRound(id, index) {
    if(checkCardClicked(id)) {
      if(score > record) setRecord(score);
      resetRound();
      return;
    }
    if(!checkCardClicked(id)) {
      setCardClicked(index)
      const newScore = score + 1;
      if(newScore > record) setRecord(newScore);
      setScore(newScore)
    }
  }
  function checkCardClicked(id) {
    console.log(cards.some((item) => {
      return item.clicked && item.name === id;
    }))
    return cards.some((item) => {
      return item.clicked && item.name === id;
    });
  }
  function setCardClicked(i) {
    setCards(
      cards, 
      cards[i].clicked = true,
    )
  }
  function shuffleCards() {
    
  }
  function resetRound() {
    resetCards();
    resetScore();
  }
  function resetCards() {
    cards.forEach((card) => card.clicked = false);
    setCards(cards);
    console.log(cards);
  }
  function resetScore() {
    setScore(0);
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Memory Card Game</h1>
      </header>
      <div className="body">
      <div className="score">
        <p>Score: {score}</p>
        <p>Record: {record}</p>
      </div>
      <div className="cardContainer">
      {
        cards.map((item, i) => {
          const uuid = uuidv4();
        return (
          <div className="card" key={uuid} id={item.name} data-index={i} onClick={handleCardClicked}>
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
