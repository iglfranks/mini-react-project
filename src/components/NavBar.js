import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const NavBar = () => {
  const history = useHistory()
  const [cards, setCards] = useState([])
  const [allCardId, setAllCardId] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster,spell%20card,trap%20card')
        // console.log('data', data)
        setCards(data.data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
    
  }, [])

  

  function handleRandom() {
    function number() {
      const item = [Math.floor(Math.random() * cards.length)]
      setAllCardId(cards[item])
    }
    number()
    // console.log('test ->>>', allCardId.id)
    sendToRandom()
    
    
  }

  function sendToRandom() {
    history.push(`/${allCardId.id}`)
    console.log(hasError)
  }



  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to= '/' className="button is-link has-text-weight-bold is-outlined">❖ Home</Link>
            <br/>
            <br/>
          </div>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-warning has-text-weight-bold is-spaced is-outlined" id="randombtn" onClick={handleRandom}>➤ Random</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to='/wishlist' className="button is-danger has-text-weight-bold is-outlined">♥️ Wish List</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar














