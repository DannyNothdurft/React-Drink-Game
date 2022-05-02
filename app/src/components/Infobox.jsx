import React, { useState } from 'react'

// data
import language from './../data/language.json'

// components
import LanguageDropdown from './LanguageDropdown';

function Infobox() {

  return (
    <div className='infobox'>
        <h2>{language[0].contents.h2}</h2>
        <hr />
        <p>{language[0].contents.p1}</p>
        <p>{language[0].contents.p2}</p>
        <ul>
            <li>{language[0].contents.l1}</li>
            <li>{language[0].contents.l2}</li>
            <li>{language[0].contents.l3}</li>
            <li>{language[0].contents.l4}</li>
        </ul>
        <p>{language[0].contents.p3}</p>
        <p>{language[0].contents.p4}</p>
        <p>{language[0].contents.p5}</p>

        <LanguageDropdown />
    </div>
  );
}

export default Infobox;