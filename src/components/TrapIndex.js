import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import IndexMap from './helpers/IndexMap'

const TrapIndex = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=trap%20card')
      setCards(data.data)

    }
    getData()

  }, [])

  
  return (
    <section className='section has-background-danger-light'>
      <div className='buttons is-centered'>
        <Link to='/spells'><button className='button is-success is-medium has-text-weight-bold mx-2 has-text-black'>Spell Cards</button></Link>
        <Link to='/monsters'><button className='button is-warning is-medium has-text-weight-bold mx-2 has-text-black'>Monster Cards</button></Link>
      </div>
      <hr/>
      <div className='container'>
        {cards.length > 0 ?
          <div className='columns is-multiline has-background-danger'>
            {cards.map(card => {
              return (
                <IndexMap key={card.id} {...card}/>
              )
            })}

          </div>
          : <div className= 'is-size-1 has-text-weight-bold has-text-centered'>{'Page Loading....⚙︎'}</div>}
      </div>
    </section>
  )

}
export default TrapIndex