import React, { Component } from 'react'
import './Home.scss'
import Hero from '../components/Hero'
import heroImage from '.././assets/home_hero.jpg'
import Thumb from '../components/Thumb'
import data from '../data.json'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lodgingData: [],
    }
  }

  componentDidMount() {
    this.setState({ lodgingData: data })
  }

  render() {
    const { lodgingData } = this.state

    return (
      <>
        <Hero image={heroImage}>
          <h1>
            <span>Chez vous,</span> partout et ailleurs
          </h1>
        </Hero>

        <section className="lodging-section">
          <div className="lodging-container">
            {lodgingData?.map((lodging) => (
              <Thumb key={lodging.id} lodging={lodging} />
            ))}
          </div>
        </section>
      </>
    )
  }
}

export default Home
