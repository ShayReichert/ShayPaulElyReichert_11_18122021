import React, { Component } from 'react'
import './Hero.scss'

class Hero extends Component {
  
  render() {
    return (
      <section className="hero-section">
        <div className="content">
          <div className="background">
            <img src={this.props.image} alt="" />
            {this.props.imageMobile && (
              <img
                className="mobile-image"
                src={this.props.imageMobile}
                alt=""
              />
            )}
          </div>
          <div className="text">{this.props.children}</div>
        </div>
      </section>
    )
  }
}

export default Hero
