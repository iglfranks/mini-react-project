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
        console.log('Chosen card', chosenCard)
      } catch (err) {
        setHasError(true)
        // console.log(err)
      }
    }
    getData()

  }, [id])

  const handleAdd = () => {
    window.localStorage.setItem(`wishListCard${window.localStorage.length}`, id)
  }

  const handleRemove = () => {
    // console.log(window.localStorage.wishListCard1 === '68170903')
    // console.log(id)
    for (let i = 0; i < window.localStorage.length; i++) {
      console.log(`window.localStorage.wishListCard${i}`)
      if (`window.localStorage.wishListCard${i}` === id) {
        console.log('success')
        // window.localStorage.removeItem(`wishListCard${i}`, id)
        
      } else {
        console.log(i)
        console.log('fail')
        console.log(`window.localStorage.wishListCard${i}`)
        console.log(window.localStorage.wishListCard)
        
      }
    }
  }


  
  return (
    <section className='section has-background-info'>
      <div className='container'>
        {chosenCard ?
          <div>
            <div className='columns'>
              <div className='column is-half'>
                <figure className='image'>
                  <img src={chosenCard[0].card_images[0].image_url} alt={chosenCard[0].name} />
                </figure>
              </div>
              <div className='column is-half has-text-white'>
                <div>
                  <h2 className="is-size-3 has-text-black"><strong>{chosenCard[0].name}</strong></h2>
                  <hr />
                  <h3 className="is-size-4 has-text-black"><strong>{chosenCard[0].type}</strong></h3>
                  <hr />
                  <p className="is-italic">{chosenCard[0].desc}</p>
                  <hr />
                </div>
                <div>
                  <h2 className="is-size-4"><strong>Price Listings</strong></h2>
                  <ul>
                    <br/>
                    <li>Card Market price: £{chosenCard[0].card_prices[0].cardmarket_price}</li>
                    <br/>
                    <li>TCG Player price: £{chosenCard[0].card_prices[0].tcgplayer_price}</li>
                    <br/>
                    <li>E-Bay price: £{chosenCard[0].card_prices[0].ebay_price}</li>
                    <br/>
                    <li>Amazon price: £{chosenCard[0].card_prices[0].amazon_price}</li>
                    <br/>
                    <li>Cool Stuff Inc price: £{chosenCard[0].card_prices[0].coolstuffinc_price}</li>
                    <br/>
                  </ul>
                </div>
                <hr/>
                <div className='buttons is-centered'>
                  <button className="button is-success has-text-weight-bold mx-4 has-text-black" onClick={handleAdd}>+ Add to Wish List</button>
                  <button className="button is-danger has-text-weight-bold mx-4 has-text-black " onClick={handleRemove} >− Remove from Wish List</button>
                </div>
              </div>
            </div>
          </div>
          :
          <h2 className='title has-text-centered has-text-weight-bold is-size-1'>{hasError ? 'Something went wrong 🆘'  : 'Page Loading....⚙︎'} </h2>
        }
      </div>
    </section>
  )
}
export default CardShow