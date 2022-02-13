import React, { Component } from 'react'
import './Collapse.scss'
import arrow from '.././assets/arrow.svg'

class Collapse extends Component {
  handleClick(e) {
    e.stopPropagation()
    e.target.parentElement.classList.toggle('open')
  }

  render() {
    const { title, content, contentList, format } = this.props

    return (
      <div
        className={`collapse ${format ? format : ''}`}
        onClick={(e) => this.handleClick(e)}
      >
        <div className="collapse-header">
          <span>{title}</span>
          <span className="arrow">
            <img src={arrow} alt="" />
          </span>
        </div>
        <div className="collapse-body">
          {content && <p>{content}</p>}
          {contentList && (
            <ul>
              {contentList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Collapse
