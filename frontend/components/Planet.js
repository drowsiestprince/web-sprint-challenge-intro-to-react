import React from 'react'

function Planet({ props }) {
    
    const showMe = props.show
    if(showMe) {
        return ""
    } else {
        return (
    
            <p style={{display:"none"}} name={props.id} id={props.id}>
            Planet: 
            <span className="character-planet">
              {props.planet}
            </span>
            </p>
          )

    }
    }
    
    export default Planet