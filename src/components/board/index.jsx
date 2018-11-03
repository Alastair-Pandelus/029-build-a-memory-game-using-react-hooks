import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'

import './styles.css'

export default function Board({ cards, flipped, handleClick }) {
  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.id}
          width={100}
          height={100}
          handleClick={handleClick}
          flipped={flipped.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  )
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
}
