import React, { Component } from 'react'
import './SingleLodging.scss'
import Gallery from '../components/Gallery'
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
      cover,
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


        {/* Créer composant Gallery (pictures) */}

        <section className="single-content-section">
          <div className="row">
            <div className="title-container">
              <h1>{title}</h1>
              <p>{location}</p>
            </div>
            <div className="host-container">
              <div className="name">{host.name}</div>
              <img src={host.picture} alt="host" className="picture" />
            </div>
          </div>

          <div className="row">
            <div className="tags-container">
              {tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
              {/* Créer component <Tag /> */}
            </div>

            <div className="rating">
              {[...Array(5)].map((star, index) => {
                index += 1
                return (
                  <span
                    type="button"
                    key={index}
                    className={`star ${index <= rating ? 'full' : ''}`}
                  >
                    *{/* Mettre le vrai svg */}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="row">
            <div className="collapse-half">{description}</div>
            <div className="collapse-half">{equipments}</div>
            {/* Créer component <CollapseHalf /> */}
            {/* Cf modèle Component Collapse */}
          </div>
        </section>
      </>
    )
  }
}

export default SingleLodging
