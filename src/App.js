import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SpellIndex from './components/SpellIndex'
import TrapIndex from './components/TrapIndex'
import MonsterIndex from './components/MonsterIndex'
import SpellsShow from './components/SpellsShow'

const App = () => {

  
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/spells' component={SpellIndex}/>
        <Route exact path='/traps' component={TrapIndex}/>
        <Route exact path='/monsters' component={MonsterIndex}/>
        <Route exact path='/spells/:id' component={SpellsShow}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
