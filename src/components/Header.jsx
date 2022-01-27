import { Component } from 'react'
import './Header.scss'
import Logo from '.././assets/logo.svg'

class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Kasa logo" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#" className="current">
                Accueil
              </a>
            </li>
            <li>
              <a href="#">A propos</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
