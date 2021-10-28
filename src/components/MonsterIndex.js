import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import IndexMap from './helpers/IndexMap'

const MonsterIndex = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster')
      setCards(data.data)
      
    }
    getData()

  }, [])

  
  return (
    <section className='section has-background-warning'>
      <div className='buttons is-centered'>
        <Link to='/spells'><button className='button is-success is-medium has-text-weight-bold mx-2 has-text-black'>Spell Cards</button></Link>
        <Link to='/traps'><button className='button is-danger is-medium has-text-weight-bold mx-2 has-text-black'>Trap Cards</button></Link>
      </div>
      <hr/>
      <div className='container'>
        {cards.length > 0 ?
          <div className='columns is-multiline has-background-link'>
            
            {cards.map(card => {
              return (
                <IndexMap key={card.id} {...card}/>
              )
            })}

          </div>
          : <div className= 'has-text-centered is-size-1 has-text-weight-bold'>{'Page Loading....⚙︎'}</div>}
      </div>
    </section>
  )

}
export default MonsterIndex