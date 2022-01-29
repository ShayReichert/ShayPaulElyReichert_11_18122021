import React, { Component } from 'react'
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

            <a href="/">Retourner sur la page d’accueil</a>
          </div>
        </section>
      </>
    )
  }
}

export default NotFound
