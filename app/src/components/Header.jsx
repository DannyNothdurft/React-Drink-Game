import React, { useState } from 'react'
import {FaInfoCircle} from 'react-icons/fa';

function Header() {

  const [ info, setInfo ] = useState(false);

  return (
    <div className='header-component'>
        <h1>Drink randomly</h1>
        <button
          onClick={ () => { setInfo(!info); } }        
        >
          <FaInfoCircle />
        </button>
        { info ? <div>Funktioniert</div> : null }
    </div>
  )
}

export default Header