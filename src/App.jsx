import React, { useState } from 'react'
import Card from './components/card'

export default function App() {
  const [flipped, setFlipped] = useState([])

  const handleClick = (id) => setFlipped((flipped) => [...flipped, id])

  return (
    <div>
      <h1>Memory</h1>
      <h2>Can you remember where the cards are?</h2>

      <Card
        id={1}
        width={100}
        height={100}
        back={'/img/back.png'}
        front={'/img/reactu.png'}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  )
}
