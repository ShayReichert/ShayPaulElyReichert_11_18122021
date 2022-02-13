import { Component } from 'react'
import './About.scss'
import Hero from '../components/Hero'
import heroImage from '.././assets/about_hero.jpg'
import heroImageMobile from '.././assets/about_hero_mobile.jpg'
import Collapse from '../components/Collapse'

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapseData: [
        {
          id: 'c001',
          title: 'Fiabilité',
          content:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        {
          id: 'c002',
          title: 'Respect',
          content:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
          id: 'c003',
          title: 'Service',
          content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
          id: 'c004',
          title: 'Sécurité',
          content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
      ],
    }
  }

  render() {
    return (
      <>
        <Hero image={heroImage} imageMobile={heroImageMobile} />

        <section className="collapses-section">
          <div className="collapses-container">
            {this.state.collapseData.map((collapse) => (
              <Collapse
                key={collapse.id}
                title={collapse.title}
                content={collapse.content}
              />
            ))}
          </div>
        </section>
      </>
    )
  }
}

export default About
