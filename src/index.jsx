import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.scss'
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
