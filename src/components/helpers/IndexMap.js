import React from 'react'
import { Link } from 'react-router-dom'


const IndexMap = (props) => {

  return (
    <div key={props.id} className='column is-one-fifth-desktop'>
      <Link to={`/${props.id}`}>
        <div className='card'>
          <div className='card-header'>
            <div className='card-header-title cardTitle'>{props.name}</div>
          </div>
          <div className='card-image'>
            <figure className='image is-1'>
              <img src={props.card_images[0].image_url} alt={props.name} />
            </figure>
          </div>
          <div className='card-content'>
            <h5>{props.card_prices[0].ebay_price}</h5>
          </div>
        </div>
      </Link>
    </div>
  )

}
export default IndexMap


