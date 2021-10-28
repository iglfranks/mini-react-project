import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const NavBar = () => {
  // const history = useHistory()
  const [cards, setCards] = useState(null)
  const [allCardId, setAllCardId] = useState()
  const [hasError, setHasError] = useState(false)


  const handleRandom = async () => {
    try {
      const getData = async () => {
        const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster,spell%20card,trap%20card')
        // console.log('data', data)
        setCards(data.data)

      }
      getData()
      console.log(Math.floor(Math.random() * cards.length))

    } catch (err) {
      console.log(err)
      setHasError(true)
    }

    // assignId()

    // const allCardIds = cards.map((card) => {
    //   return card.id
    // })
    // setAllCardId(allCardIds)

    // const randomChoice = () => {
    //   if (allCardId.length < 0) {
    //     return
    //   } else {
    //     return allCardId[Math.floor(Math.random() * allCardId.length)]
    //   }
    // }


    // console.log(randomChoice())


  }

  //--------------------

  // const assignId = () => {
  //   const allCardIds = cards.map((card) => {
  //     return card.id
  //   })
  //   setAllCardId(allCardIds)
  // }

  // useEffect(() => {



  // const allCardIds = cards.map((card) => {
  //   return card.id
  // })
  // setAllCardId(allCardIds)

  // const randomChoice = () => {
  //   if (allCardId.length < 0) {
  //     return
  //   } else {
  //     return allCardId[Math.floor(Math.random() * allCardId.length)]
  //   }
  // }


  // console.log(randomChoice())

  // }, [cards])





  // useEffect(() => {
  //   history.push(`/${allCardId.Math.floor()}`)
  // }, [allCardId])


  console.log(allCardId)
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to='/' className="button is-link has-text-weight-bold is-outlined">❖ Home</Link>
            <br />
            <br />
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














