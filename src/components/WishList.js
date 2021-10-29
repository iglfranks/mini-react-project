import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IndexMap from './helpers/IndexMap'
import 'animate.css'
import { Link } from 'react-router-dom'

const WishList = () => {

  const cardIds = []
  let joinCardIds = ''

  const [cards, setCards] = useState([])

  useEffect(() => {

    for (let i = 0; i < window.localStorage.length; i++) {
      const allCards = window.localStorage.getItem(`wishListCard${window.localStorage.length - (1 + i)}`)
      cardIds.push(allCards)
    }

    joinCardIds = cardIds.join(',')
    console.log('join card ids', joinCardIds)

  }, [])

  useEffect(() => {

    const getData = async () => {
      const { data } = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${joinCardIds}`)
      setCards(data.data)
    }
    getData()


  }, [joinCardIds])

  console.log('final cards ->>>', cards)
  console.log('cardIds ->>>', cardIds)


  return (
    <section className='section has-background-info-dark '>
      <div className='container has-background-grey-darker'>
        <h1 className='is-size-1 has-text-centered has-text-weight-bold has-text-link-light animate__animated animate__fadeInLeftBig' id='title'>♥️ WISH LIST ♥️</h1>
      </div>
      <br/>
      <div className='has-text-centered' id='buttons'>
        <Link to='/spells'><button className='button is-success is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Spell Cards</button></Link>
        <Link to='/traps'><button className='button is-danger is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Trap Cards</button></Link>
        <Link to='/monsters'><button className='button is-warning is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Monster Cards</button></Link>
      </div>
      <hr />
      <div className='container'>
        <div className="columns is-multiline">
          {cards.map(card => {
            return (
              <IndexMap key={card.id} {...card} />
            )
          })}

        </div>
      </div>
    </section>
  )

}
export default WishList