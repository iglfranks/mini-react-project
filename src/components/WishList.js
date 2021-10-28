import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IndexMap from './helpers/IndexMap'

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
    <section className='section'>
      <h1 className='title is-centered'>Wishlist</h1>
      <h2>Total Price:</h2>
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