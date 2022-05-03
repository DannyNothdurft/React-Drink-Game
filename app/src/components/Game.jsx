import React, { useState } from 'react'

// data
import game from '../data/game.json'

// img
import newRoundButton from '../img/newRoundButton.png'
import cardBack from '../img/cardBack.png';

function Game() {

    const [ random, setRandom ] = useState(0)

    const play = () => {
        const generateRandom = Math.round( Math.random() * game.length - 0.5 );
        console.log(game.length)
        setRandom(generateRandom)
        console.log(generateRandom)
    }
    console.log(random)

    return (
        <div className='game-component'>
            <div className='play-card'>
                <div className='back'>
                    <img src={cardBack} alt="Karten Rückseite" />
                </div>
                <div className='front'>
                    <p>{ game[random].text }</p>
                    <hr />
                    <img src={game[random].img} alt="Random img" />
                </div>
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