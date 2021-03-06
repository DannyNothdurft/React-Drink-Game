import React, { useState, useEffect } from 'react'

// data
import language from './../data/language.json'

// components
import LanguageDropdown from './LanguageDropdown';

function Infobox() {
  
  const [ select, setSelect ] = useState('Deutsch');
  const [ lang, setLang ] = useState([]);

  useEffect(() => {
    const selectetLang = language.filter( langu => langu.language === select )
    setLang(selectetLang[0].contents)
  }, [select])

  console.log(lang.h2)

  return (
    <div className='infobox'>
        <h2>{ lang.h2 }</h2>
        <h6>{ lang.p1 }</h6>
        <hr />
        <p>{ lang.p2 }</p>
        <p>{ lang.p3 }</p>
        <p>{ lang.p4 }</p>
        <ul>
            <li>{ lang.l1 }</li>
            <li>{ lang.l2 }</li>
            <li>{ lang.l3 }</li>
            <li>{ lang.l4 }</li>
        </ul>
        <p>{ lang.p5 }</p>
        <p>{ lang.p6 }</p>
        <p>{ lang.p7 }</p>
        <p>{ lang.p8 }</p>

        <LanguageDropdown
          select={select}
          setSelect={setSelect}
        />
    </div>
  )
}

export default Infobox;