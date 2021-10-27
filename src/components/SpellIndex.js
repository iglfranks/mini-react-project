import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SpellIndex = () => {

  const [spellCards, setSpellCards] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card')
      setSpellCards(data.data)
      
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
        <div className='columns is-multiline'>
          {spellCards.map(card => {
            return (
              <div key={card.id} className='column is-one-fifth-desktop'>
                <div className='card'>
                  <div className='card-header'>
                    <div className='card-header-title cardTitle'>{card.name}</div>
                  </div>
                  <div className='card-image'>
                    <figure className='image is-1'>
                      <img src={card.card_images[0].image_url} alt={card.name}/>
                    </figure>
                  </div>
                  <div className='card-content'>
                    <h5>{card.card_sets[0].set_rarity}</h5>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )

}
export default SpellIndex