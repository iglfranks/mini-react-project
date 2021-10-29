import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import IndexMap from './helpers/IndexMap'


const SpellIndex = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card')
      setCards(data.data)
    }
    getData()

  }, [])

  console.log(cards)
  return (
    <section className='section has-background-primary-dark'>
      <div className='container has-background-grey-darker'>
        <h1 className='is-size-1 has-text-centered has-text-weight-bold has-text-primary animate__animated animate__fadeInLeftBig' id='title'>🪄 SPELL CARDS 🪄</h1>
      </div>
      <br/>
      <div className='buttons is-centered'>
        <Link to='/traps'><button className='button is-danger is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Trap Cards</button></Link>
        <Link to='/monsters'><button className='button is-warning is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Monster Cards</button></Link>
      </div>
      <div className='field'>
        <p className='control has-icons-right'>
          <input className='input is-medium is-link' type='search' placeholder='Search...'/>
          <span className='icon is-large is-right'>
            <i className='search'>⏎</i>
          </span>
        </p>
      </div>
      <hr/>
      <div className='container'>
        {cards.length > 0 ?
          <div className='columns is-multiline has-background-primary'>
            {cards.map(card => {
              return (
                <IndexMap key={card.id} {...card}/>
              )
            })}

          </div>
          : <div className= 'is-size-1 has-text-weight-bold has-text-centered'>{'Page Loading....⚙︎'}</div>
        }
      </div>
    </section>
  )

}
export default SpellIndex

