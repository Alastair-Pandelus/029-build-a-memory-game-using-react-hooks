import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({
  handleClick,
  flipped,
  id,
  height,
  type,
  width,
}) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}
      style={{
        width,
        height,
      }}
      onClick={() => handleClick(id)}
    >
      <div className='flipper'>
        <img
          alt='card'
          className={flipped ? 'front' : 'back'}
          src={flipped ? `/img/${type}.png` : '/img/back.png'}
          style={{ width, height }}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}
