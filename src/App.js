import React from 'react';
import list from './utility/list';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [cards, setCards] = React.useState(list);
  const [score, setScore] = React.useState(0);
  const [record, setRecord] = React.useState(0);
  React.useEffect(() => {
    shuffleCards(cards);
  })
  function handleCardClicked(e) {
    e.preventDefault();
    let parent;
    if(e.target.parentNode.parentNode.classList.contains('card')) parent = e.target.parentNode.parentNode;
    if(e.target.parentNode.classList.contains('card')) parent = e.target.parentNode;
    if(e.target.classList.contains('card')) parent = e.target;
    const id = parent.id;
    handleRound(id);
  }
  function handleRound(id) {
    if(checkCardClicked(id)) {
      if(score > record) setRecord(score);
      resetCards();
      setScore(0);
      return;
    }
    if(!checkCardClicked(id)) {
      setCardClicked(id)
      const newScore = score + 1;
      if(newScore > record) setRecord(newScore);
      setScore(newScore)
    }
  }
  function checkCardClicked(id) {
    return cards.some((item) => {
      return item.clicked && item.name === id;
    });
  }
  function setCardClicked(name) {
    const index = cards.findIndex((cards) => cards.name === name)
    console.log(index)
    setCards(
      cards,
      cards[index].clicked = true,
    )
  }
  function shuffleCards() {
    for(let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]]
    }
  }
  function resetCards() {
    cards.forEach((card) => card.clicked = false);
    setCards(cards);
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
