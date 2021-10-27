import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={Logo} className="logo" alt="Yu-Gi-Oh logo"/>
          </div>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="buttons is-centered">
              <a className="button is-primary">🔀 Random</a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to='/wishlist' className="button is-danger">♥️ Wish List</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default NavBar














