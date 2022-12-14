import React from 'react'
import './index.scss'

const AnimateLetters = ({ letter, strArr, idx }) => {
  return (
    <span>
      {strArr.map((char, i) => (
        <span key={char + i} className={`${letter} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimateLetters
