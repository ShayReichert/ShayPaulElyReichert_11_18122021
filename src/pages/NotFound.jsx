
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'
import NotFoundImage from '.././assets/404.png'

class NotFound extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <section className="not-found-section">
          <div className="content">
            <img src={NotFoundImage} alt="" />
            <p>
              Oups! La page que <span>vous demandez n'existe pas.</span>
            </p>

            <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
        </section>
      </>
    )
  }
}

export default NotFound
