import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [apod, setApod] = useState([])
  const [aplan, setAplan] = useState([])
  
useEffect(() => {
  axios.get(urlPlanets)
      .then(data => setAplan(data.data))

  axios.get(urlPeople)
    .then(data => setApod(data.data))
}, [])

let planets = aplan
let characters = apod

 for (let i = 0; i < characters.length; i++) {
    let characterhomeworldid = characters[i].homeworld
    let foundplanet = planets.find(planet => planet.id === characterhomeworldid)
    characters[i].planet = foundplanet.name
 }

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {
        apod.map((list)=> (
          <Character props={{ name: list.name, planet: list.planet, id: list.id, show: list.show }}/>
         ))
      }
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App