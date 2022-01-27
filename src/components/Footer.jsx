import { Component } from 'react';
import './Footer.scss';
import logoWhite from '.././assets/logo_white.svg'

class Footer extends Component {

  render() {
    return (
      <div className="footer-section">
        <div className="content">
          <div className="logo">
            <a href="/">
              <img src={logoWhite} alt="Kasa logo" />
            </a>
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
