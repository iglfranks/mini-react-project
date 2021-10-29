import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {

  return (
    <section className='section' id='hero'>
      <div className='hero-body'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='field'>
          <p className='control has-icons-right'>
            <input className='input is-medium is-link' type='search' placeholder='Search...' />
            <span className='icon is-large is-right'>
              <i className='search'>⏎</i>
            </span>
          </p>
        </div>
        <div className='has-text-centered' id='buttons'>
          <Link to='/spells'><button className='button is-success is-medium is-rounded has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Spell Cards</button></Link>
          <Link to='/traps'><button className='button is-danger is-medium is-rounded has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Trap Cards</button></Link>
          <Link to='/monsters'><button className='button is-warning is-medium is-rounded has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Monster Cards</button></Link>
        </div>
      </div>
    </section>
  )

}
export default Home