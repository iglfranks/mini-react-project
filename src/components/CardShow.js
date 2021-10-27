import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CardShow = () => {

  const [chosenCard, setChosenCard] = useState(null)
  const [hasError, setHasError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
        setChosenCard(data.data)

      } catch (err) {
        setHasError(true)
        // console.log(err)
      }
    }
    getData()

  }, [id])

  // console.log('Chosen card', chosenCard)
  return (
    <section className='section'>
      <div className='container'>

        {chosenCard ?
          <div>
            <div className='columns'>
              <div className='column is-half'>
                <figure className='image'>
                  <img src={chosenCard[0].card_images[0].image_url} alt={chosenCard[0].name} />
                </figure>
              </div>
              <div className='column is-half'>
                <div>
                  <h2><strong>{chosenCard[0].name}</strong></h2>
                  <hr />
                  <h3>{chosenCard[0].type}</h3>
                  <hr />
                  <p>{chosenCard[0].desc}</p>
                  <hr />
                </div>
                <div>
                  <h2><strong>Price Listings</strong></h2>
                  <ul>
                    <li>Card Market price: £{chosenCard[0].card_prices[0].cardmarket_price}</li>
                    <li>TCG Player price: £{chosenCard[0].card_prices[0].tcgplayer_price}</li>
                    <li>E-Bay price: £{chosenCard[0].card_prices[0].ebay_price}</li>
                    <li>Amazon price: £{chosenCard[0].card_prices[0].amazon_price}</li>
                    <li>Cool Stuff Inc price: £{chosenCard[0].card_prices[0].coolstuffinc_price}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='columns'>
              <div className='column is-full'>
                <button>Add</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
          :
          <h2 className='title has-text-centered'>{hasError ? 'Something went wrong' : 'Loading...'}</h2>

        }

      </div>
    </section>
  )

}
export default CardShow