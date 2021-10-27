import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <section className='section' id='hero'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title is-1 has-text-centered' id='hero-title'>
            Yu-Gi-Oh Card Browse
          </h1>
        </div>
        <div className='container buttonz' id='buttons'>
          <Link to='/spells'><button className='button'>Spell Cards</button></Link>
          <Link to='/traps'><button className='button'>Trap Cards</button></Link>
          <Link to='/monsters'><button className='button'>Monster Cards</button></Link>
        </div>
      </div>
    </section>
  )

}
export default Home