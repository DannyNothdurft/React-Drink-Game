import React, { useState } from 'react'

// data
import game from '../data/game.json'

// img
import newRoundButton from '../img/newRoundButton.png'
import cardBack from '../img/cardBack.png';

function Game() {

    const [ random, setRandom ] = useState(0)
    const [ flipped, setFlipped ] = useState(false);

    const play = () => {
        const generateRandom = Math.round( Math.random() * game.length - 0.5 );
        console.log(game.length)
        setRandom(generateRandom)
        setFlipped(!flipped)
    }

    console.log(flipped)

    return (
        <div className='game-component'>
            <div className={flipped ? "play-card" : "play-card flip"}>
                <div className={ flipped ? 'back flip' : 'back' }>
                    <img src={cardBack} alt="Karten Rückseite" />
                </div>
                <div className={ flipped ? 'front flip' : 'front' }>
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