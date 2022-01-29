import React, { Component } from 'react'
import './Home.scss'
import Hero from '../components/Hero'
import heroImage from '.././assets/home_hero.jpg'

class SingleLodging extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { lodgingId } = this.props.match.params
    console.log(lodgingId)
  }

  render() {
    return (
      <>
        <Hero image={heroImage}></Hero>
      </>
    )
  }
}

export default SingleLodging
