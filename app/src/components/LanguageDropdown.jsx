import React from 'react'

function LanguageDropdown( {select, setSelect} ) {

  return (
    <select
      className='dropdown'
      value={select}
      onChange={ (e) => setSelect(e.target.value) }
    >
      <option value="Deutsch">Deutsch</option>
      <option value="English">English</option>
    </select>
  )
}

export default LanguageDropdown;