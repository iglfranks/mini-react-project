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
                <IndexMap key={card.id} {...card} cardType={'spells'}/>
              )
            })}

          </div>
          : <div>{'error'}</div>}
      </div>
    </section>
  )

}
export default SpellIndex

{/* <div className='card-content'>
                      {card.card_sets > 0 ? <h5>{card.card_sets[0].set_rarity}</h5>
                        : <h5>{'error'}</h5>
                      }
                    </div> */}