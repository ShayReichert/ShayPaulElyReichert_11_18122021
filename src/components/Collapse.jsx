import React, { Component } from 'react'
import './Collapse.scss'
import arrow from '.././assets/arrow.svg'

class Collapse extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    e.stopPropagation()
    e.target.parentElement.classList.toggle('open')
  }

  render() {
    const { title, content } = this.props.collapse

    return (
      <div className="collapse" onClick={(e) => this.handleClick(e)}>
        <div className="collapse-header">
          <span>{title}</span>
          <span className="arrow">
            <img src={arrow} />
          </span>
        </div>
        <div className="collapse-body">
          <p>{content}</p>
        </div>
      </div>
    )
  }
}

export default Collapse
