import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '.././assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Kasa logo" />
          </Link>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/" className="current">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
