import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SpellIndex from './components/SpellIndex'
import TrapIndex from './components/TrapIndex'
import MonsterIndex from './components/MonsterIndex'
import CardShow from './components/CardShow'
import WishList from './components/WishList'

const App = () => {

  
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/spells' component={SpellIndex}/>
        <Route exact path='/traps' component={TrapIndex}/>
        <Route exact path='/monsters' component={MonsterIndex}/>
        <Route exact path='/wishlist' component={WishList}/>
        <Route exact path='/:id' component={CardShow}/>
        
      </Switch>
    </BrowserRouter>
  )
}

export default App
