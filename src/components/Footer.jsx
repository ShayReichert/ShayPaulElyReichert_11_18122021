import { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.scss';
import logoWhite from '.././assets/logo_white.svg'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={logoWhite} alt="Kasa logo" />
            </Link>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Kasa. All rights reserved
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
