import React from 'react'
import {FaInfoCircle} from 'react-icons/fa';

function Header() {
  return (
    <div className='header-component'>
        <h1>Drink randomly</h1>
        <button><FaInfoCircle /></button>
    </div>
  )
}

export default Header