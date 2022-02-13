import React, { Component } from 'react'
import './Gallery.scss'
import arrow from '../assets/arrow.svg'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }

  updateIndex(newIndex) {
    const numberOfSlides = this.props.pictures.length

    if (newIndex < 0) {
      newIndex = numberOfSlides - 1
    } else if (newIndex >= numberOfSlides) {
      newIndex = 0
    }
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { pictures } = this.props

    return (
      <section className="gallery-section">
        {pictures.length !== 1 && (
          <>
            <button
              className="prev"
              onClick={() => this.updateIndex(this.state.activeIndex - 1)}
            >
              <img src={arrow} alt="" />
            </button>
            <button
              className="next"
              onClick={() => this.updateIndex(this.state.activeIndex + 1)}
            >
              <img src={arrow} alt="" />
            </button>
          </>
        )}

        <div
          className="inner"
          style={{
            transform: `translateX(-${this.state.activeIndex * 100}%)`,
          }}
        >
          {pictures.map((picture, index) => (
            <div key={index} className="item-container">
              <img src={picture} alt="" className="item" />
              <div className="position">
                {index + 1} / {pictures.length}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Gallery
