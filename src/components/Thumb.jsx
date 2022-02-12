import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Thumb.scss'

class Thumb extends Component {

  render() {
    const { id, cover, title } = this.props.lodging

    return (
      <Link to={`/lodging/${id}`} className="lodging-thumb">
        <img className="image" src={cover} alt={title} loading="lazy" />
        <div className="title">{title}</div>
      </Link>
    )
  }
}

export default Thumb
