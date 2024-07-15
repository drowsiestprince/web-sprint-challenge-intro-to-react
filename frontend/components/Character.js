import React from 'react'
import { useState } from 'react'

function Character({ props }) { 
  const [homeworld, setHomeworld] = useState(false)
    
    return (
    <div onClick={() => setHomeworld(homeworld ? false : true)} className="character-card">
    <h3 className="character-name">
      {props.name}
    </h3>
      {homeworld ?
      <p name={props.id} id={props.id}>
            Planet: 
            <span className="character-planet">
              {props.planet}
            </span>
            </p>
    : ""}
    </div>    
    )
}

export default Character