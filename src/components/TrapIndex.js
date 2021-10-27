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
    <section className='section'>
      <div className='container buttonz'>
        <Link to='/spells'><button className='button'>Spell Cards</button></Link>
        <Link to='/traps'><button className='button'>Trap Cards</button></Link>
        <Link to='/monsters'><button className='button'>Monster Cards</button></Link>
      </div>
      <div className='container'>
        {cards.length > 0 ?
          <div className='columns is-multiline'>
            {cards.map(card => {
              return (
                <IndexMap key={card.id} {...card}/>
              )
            })}

          </div>
          : <div>{'error'}</div>}
      </div>
    </section>
  )

}
export default TrapIndex