import React from 'react'
import Planet from './Planet'
//import styled from 'styled-components'
import { useState } from 'react'

function Character({ props }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [homeworld, setHomeworld] = useState([])
  //setHomeworld(props.show)

// ❗ Create a "toggle" click handler to show or remove the homeworld

const clickMe = (propId) => () => {
  const myElement = document.getElementById(propId)
  if(myElement.style.display === "none"){
    myElement.style.display = "block"
  } else {
    myElement.style.display = "none"
  }
}

const handleclick = () => () => {
  debugger
  const myElement = document.getElementById(propId)
  if(myElement.style.display === "none"){
    myElement.style.display = "block"
  } else {
    myElement.style.display = "none"
  }
}


  //if(props.show) {
    return (
    <div onClick={(e) => clickMe(props.id)(e)} className="character-card">
    <h3 className="character-name">
      {props.name}
    </h3>
    <Planet props={{ name: props.name, planet: props.planet, id: props.id, show: props.show }} />
    </div>    
    )
  // } else {
  //   return (
  //     <div onClick={(e) => clickMe(props.id)(e)} className="character-card">
  //       <h3 className="character-name">
  //         {props.name}
  //       </h3>
  //       <Planet props={{ name: props.name, planet: props.planet, id: props.id, show: props.show }} />
  
  //     </div>    
  //   )
  // }

}

export default Character


