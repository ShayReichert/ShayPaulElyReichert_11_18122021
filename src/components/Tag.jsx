import React, { Component } from 'react'
import './Tag.scss'

class Tag extends Component {
  render() {
    const { tag } = this.props
    return (
      <li className="tag">
        {tag}
      </li>
    )
  }
}

export default Tag
