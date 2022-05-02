import React from 'react'

// data
import Language from './../data/language.json'

function Infobox() {

  return (
    <div className='infobox'>
        <h2>{Language[0].contents.h2}</h2>
        <hr />
        <p>{Language[0].contents.p1}</p>
        <p>{Language[0].contents.p2}</p>
        <ul>
            <li>{Language[0].contents.l1}</li>
            <li>{Language[0].contents.l2}</li>
            <li>{Language[0].contents.l3}</li>
            <li>{Language[0].contents.l4}</li>
        </ul>
        <p>{Language[0].contents.p3}</p>
        <p>{Language[0].contents.p4}</p>
        <p>{Language[0].contents.p5}</p>
    </div>
  )
}

export default Infobox;