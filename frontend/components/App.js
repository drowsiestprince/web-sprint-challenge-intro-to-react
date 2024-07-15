import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [apod, setApod] = useState([])
  const [aplan, setAplan] = useState([])
  
  // ❗ Create effects to fetch the data and put it in state
useEffect(() => {
  axios.get(urlPlanets)
      .then(data => setAplan(data.data))

  axios.get(urlPeople)
    .then(data => setApod(data.data))
}, [])

let planets = aplan
let characters = apod
//let homeworlds = homeworld

for (let i = 0; i < characters.length; i++) {
  characters[i].planet = planets[i].name
  //homeworlds[i].show = false
}

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {
      // ❗ Map over the data in state, rendering a Character at each iteration 
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
