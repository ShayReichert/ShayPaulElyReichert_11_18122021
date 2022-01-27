import React, { Component } from 'react'
import './Home.scss'
import Hero from '.././assets/home_hero.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <section className="hero-section">
          <div className="content">
            <div className="background">
              <img src={Hero} alt="" />
            </div>
            <div className="text">
              <h1>
                <span>Chez vous,</span> partout et ailleurs
              </h1>
            </div>
          </div>
        </section>

        <section className="lodging-section">
          <div className="lodging-container">
            <div className="lodging-thumb">
              <div className="title">Titre de la location</div>
            </div>

            <div className="lodging-thumb">
              <div className="title">Titre de la location</div>
            </div>

            <div className="lodging-thumb">
              <div className="title">Titre de la location</div>
            </div>

            <div className="lodging-thumb">
              <div className="title">Titre de la location</div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Home
