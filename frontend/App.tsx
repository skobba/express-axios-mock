
import React from 'react'
// import { Pokemon } from './Pokemon'
import { useState } from 'react'

const pokemon = ['bulbasaur', 'pikachu', 'ditto', 'bulbasaur']

export default function App() {
  const [pollingInterval, setPollingInterval] = useState(0)

  return (
    <div className="App">
      React is running!
    </div>
  )
}
