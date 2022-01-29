import React, { Component } from 'react'
import './Thumb.scss'

class Thumb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, cover, title } = this.props.lodging

    return (
      <div key={id} className="lodging-thumb">
        <img className="image" src={cover} alt={title} />
        <div className="title">{title}</div>
      </div>
    )
  }
}

export default Thumb
