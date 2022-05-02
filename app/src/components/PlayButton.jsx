import React from 'react'

// img
import imgButton from '../img/playButton.png'

function PlayButton({ playButton, unsetPlayButton }) {


    return (
        <button className='play-button'
            onClick={ () => { unsetPlayButton(!playButton) } }
        >
            <img src={imgButton} alt="Play Button" />
        </button>
    );
}

export default PlayButton;