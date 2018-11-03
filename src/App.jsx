import React, { useState, useEffect } from 'react'
import Board from './components/board'

import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  const handleClick = (id) => setFlipped((flipped) => [...flipped, id])

  return (
    <div>
      <h1>Memory</h1>
      <h2>Can you remember where the cards are?</h2>

      <Board cards={cards} flipped={flipped} handleClick={handleClick} />
    </div>
  )
}
