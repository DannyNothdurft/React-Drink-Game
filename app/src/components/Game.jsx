import React, { useState } from 'react'

// data
import game from '../data/game.json'

function Game() {

    const [ random, setRandom ] = useState()

    const play = () => {
        const generateRandom = Math.round( Math.random() * game.length - 0.5 );
        setRandom(generateRandom)
    }

    return (
        <div>
            <p>{game[random]}</p>
            <button
            className='game-button'
                onClick={play}
            >
                PLAY
            </button>
        </div>
    );
}

export default Game;