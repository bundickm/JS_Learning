// Importing Dependencies
import React from 'react'
import { Route, NavLink } from 'react-router-dom'

// Importing Style
import './App.css'

// Importing Components
import LandingPage from './views/LandingPage'
import CharacterPage from './views/CharacterPage'
import SingleCharacter from './views/SingleCharacter'

import characters from './data/characters'

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact activeClassName='activeNavButton' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='activeNavButton' to='/characters'>
            Avengers
          </NavLink>
        </li>
      </ul>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/characters' render={props => <CharacterPage {...props} characters={characters}/>}/>
      <Route path='/characters/:id' render={props => <SingleCharacter {...props} characters={characters}/>}/>
    </div>
  );
}

export default App
