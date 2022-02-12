import React, { Component } from 'react'
import { ReactComponent as StarImage } from '../assets/star.svg'
import './SingleLodging.scss'
import Gallery from '../components/Gallery'
import Collapse from '../components/Collapse'
import data from '../data.json'

class SingleLodging extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleLodgingData: {
        equipments: [],
        host: {},
        pictures: [],
        tags: [],
      },
    }
  }

  componentDidMount() {
    const { lodgingId } = this.props.match.params
    const singleLodging = data.find((lodging) => lodging.id === lodgingId)
    this.setState({ singleLodgingData: singleLodging })
  }

  render() {
    const singleLodging = this.state.singleLodgingData
    const {
      pictures,
      title,
      location,
      host,
      tags,
      rating,
      description,
      equipments,
    } = singleLodging

    return (
      <>
        <Gallery pictures={pictures} />

        <section className="single-content-section">
          <div className="row">
            <div className="column">
              <div className="title-container">
                <h1>{title}</h1>
                <p>{location}</p>
              </div>
              <ul className="tags-container">
                {tags.map((tag, index) => (
                  <li key={index} className="tag">
                    {tag}
                  </li>
                ))}
                {/* Créer component <Tag /> */}
              </ul>
            </div>

            <div className="column">
              <div className="host-container">
                <p className="name">{host.name}</p>
                <img
                  src={host.picture}
                  alt="host"
                  className="picture"
                  loading="lazy"
                />
              </div>

              <div className="rating">
                {[...Array(5)].map((star, index) => {
                  index += 1
                  return (
                    <StarImage
                      fill={`${index <= rating ? '#FF6060' : '#E3E3E3'}`}
                      key={index}
                      className="star"
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="collapses-container-half">
              <Collapse
                collapse={{
                  title: 'Description',
                  content: description,
                  format: 'collapse-half',
                }}
              />
              <Collapse
                collapse={{
                  title: 'Équipements',
                  contentList: equipments,
                  format: 'collapse-half',
                }}
              />
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default SingleLodging
