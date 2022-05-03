import React, { useState } from 'react'

// data
import game from '../data/game.json'

// img
import newRoundButton from '../img/newRoundButton.png'

function Game() {

    const [ random, setRandom ] = useState()

    const play = () => {
        const generateRandom = Math.round( Math.random() * game.length - 0.5 );
        setRandom(generateRandom)
    }

    return (
        <div className='game-component'>
            <div className='play-card'>
                <p>{game[random]}</p>
            </div>
            <button
                className='game-button'
                onClick={play}
            >
                <img src={newRoundButton} alt="New Round Button" />
            </button>
        </div>
    );
}

export default Game;