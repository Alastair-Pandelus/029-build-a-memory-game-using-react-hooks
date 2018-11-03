import React, { useState, useEffect } from 'react'
import Board from './components/board'

import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    )
  }

  const handleClick = (id) => setFlipped((flipped) => [...flipped, id])

  return (
    <div>
      <h1>Memory</h1>
      <h2>Can you remember where the cards are?</h2>

      <Board
        cards={cards}
        flipped={flipped}
        dimension={dimension}
        handleClick={handleClick}
      />
    </div>
  )
}
