import React from 'react'
import { Link } from 'react-router-dom'


const IndexMap = (props) => {

  return (
    <div key={props.id} className='column is-one-fifth-desktop'>
      <Link to={`/${props.id}`}>
        <div className='card'>
          <div className='card-header has-background-black'>
            <div className='card-header-title is-centered cardTitle has-text-white is-underlined pl-0 pr-0 pt-2 pb-2 '>{props.name}</div>
          </div>
          <div className='card-image'>
            <figure className='image is-1'>
              <img src={props.card_images[0].image_url} alt={props.name} />
            </figure>
          </div>
          <div className='card-content pl-0 pr-0 pt-2 pb-2 has-text-centered has-background-black has-text-warning has-text-weight-bold'>
            <h5>£ {props.card_prices[0].ebay_price}</h5>
          </div>
        </div>
      </Link>
    </div>
  )

}
export default IndexMap


