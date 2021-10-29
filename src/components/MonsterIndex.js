import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import IndexMap from './helpers/IndexMap'

const MonsterIndex = () => {

  const [cards, setCards] = useState([])
  // let search = ''

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster')
      setCards(data.data)

    }
    getData()

  }, [])

  // function filterSearch() {
  //   const regexSearch = new RegExp(search, 'i')
  //   console.log(regexSearch)
  //   return cards.filter(card => {
  //     return regexSearch.test(card.name)
  //   })
      
  // }

  // function handleText(e) {
  //   search = e.target.value
  //   console.log(search)
  //   filterSearch()
  // }

  // ^^^ search bar


  return (
    <section className='section has-background-warning'>
      <div className='container has-background-grey-darker'>
        <h1 className='is-size-1 has-text-centered has-text-weight-bold has-text-link animate__animated animate__fadeInDownBig' id='title'>👹 MONSTER CARDS 👹</h1>
      </div>
      <br/>
      <div className='buttons is-centered'>
        <Link to='/spells'><button className='button is-success is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Spell Cards</button></Link>
        <Link to='/traps'><button className='button is-danger is-medium has-text-weight-bold mx-2 has-text-black animate__animated animate__pulse animate__slower animate__infinite'>Trap Cards</button></Link>
      </div>
      <div className='field'>
        <p className='control has-icons-right'>
          <input className='input is-medium is-link' type='search' placeholder='Search...'/>
          <span className='icon is-large is-right'>
            <i className='search'>⏎</i>
          </span>
        </p>
      </div>
      <hr />
      <div className='container'>
        {cards.length > 0 ?
          <div className='columns is-multiline has-background-link'>

            {cards.map(card => {
              return (
                <IndexMap key={card.id} {...card} />
              )
            })}

          </div>
          : <div className='has-text-centered is-size-1 has-text-weight-bold'>{'Page Loading....⚙︎'}</div>}
      </div>
    </section>
  )

}
export default MonsterIndex