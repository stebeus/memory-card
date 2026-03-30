import { useState } from 'react';

import { Footer } from './components/Footer/index.jsx';
import { Grid } from './components/Grid/index.jsx';
import { Header } from './components/Header/index.jsx';

import './assets/styles/App.css';

export function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [tappedCards, setTappedCards] = useState([]);

  function endGame(score, bestScore) {
    setBestScore(score > bestScore ? score : bestScore);
    setScore(0);
    setTappedCards([]);
  }

  function handleTap({ target }) {
    const card = target.closest('[data-pokemon]');
    const pokemon = card.dataset.pokemon;

    if (tappedCards.includes(pokemon)) {
      endGame(score, bestScore);
      return;
    }

    setScore(score + 1);
    setTappedCards([...tappedCards, pokemon]);
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        <p>Tap a card to score, but never click the same Pokémon twice!</p>
        <Grid cardHandler={handleTap} />
      </main>
      <Footer />
    </>
  );
}
