import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.scss'
import Home from './pages/Home'
// import About from './pages/About'
// import NotFound from './pages/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    {/* <About /> */}
    {/* <NotFound /> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
