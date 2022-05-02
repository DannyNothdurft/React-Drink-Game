import React from 'react'

// img
import imgButton from '../img/playButton.png'

function PlayButton() {
  return (
    <button className='play-button'>
        <img src={imgButton} alt="Play Button" />
    </button>
  )
}

export default PlayButton;